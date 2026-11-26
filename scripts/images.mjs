import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const sourceDir = 'src/assets/images';
const outputDir = join(sourceDir, 'generated');
await mkdir(outputDir, { recursive: true });

for (const file of (await readdir(sourceDir)).sort()) {
  if (!/\.(webp|jpe?g|png)$/i.test(file)) continue;
  const source = join(sourceDir, file);
  const { width, height, hasAlpha } = await sharp(source).metadata();
  if (!width || !height) throw new Error(`Cannot read image dimensions: ${file}`);
  const name = parse(file).name;
  const sizes = [...new Set([Math.ceil(width / 2), width])];
  for (const size of sizes) {
    const image = () => sharp(source).resize({ width: size, withoutEnlargement: true });
    await image()
      .avif({ quality: 75 })
      .toFile(join(outputDir, `${name}-${size}.avif`));
    await image()
      .webp({ quality: 82 })
      .toFile(join(outputDir, `${name}-${size}.webp`));
    if (hasAlpha) {
      await image()
        .png()
        .toFile(join(outputDir, `${name}-${size}.png`));
    } else {
      await image()
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(join(outputDir, `${name}-${size}.jpg`));
    }
  }
  console.log(`${file}: ${sizes.join(' / ')} px`);
}
