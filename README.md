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
