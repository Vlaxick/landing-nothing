# Nothing — лабораторна робота №10

Варіант 2: BEM + ITCSS. Проєкт у розробці на основі збірки лабораторної №9.

Макет: [v2 Nothing](https://www.figma.com/design/xIVUXiPZ3hdpEFiIC0qbTL/BOSE-New-Version?node-id=6802-139).

```sh
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run images
```

## Архітектура стилів

Шари ITCSS підключаються в порядку: settings, tools, generic, elements, objects, components, utilities. Об'єкти мають префікс `o-`, компоненти — `c-`, утиліти — `u-`.

## Аналіз макета

У Figma перевірено планшетний фрейм шириною 744 px: заголовок hero — Space Grotesk Bold, 48 px, line-height 100%; текст About us — Space Mono Regular, 16 px, line-height 140%; колір обох — `#292929`. Ці значення занесено до SCSS-токенів. Повний набір розмірів, станів і параметрів сітки ще потрібно звірити з макетом.

Попередня декомпозиція BEM: `c-header`, `c-menu`, `c-hero`, `c-section-title`, `c-product-card`, `c-category`, `c-button`, `c-about`, `c-contacts`, `c-field`, `c-footer`. Об'єкти `o-container` та `o-grid` відповідають за структуру. Назви й склад блоків уточнюються під час верстки.

Оригінальні зображення й SVG з макета ще не додано; підставні ресурси не використовуються.
