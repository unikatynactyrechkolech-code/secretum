## Secretum – Detektivní služby

Next.js (App Router + TypeScript + Tailwind CSS) web pro detektivní kancelář
Secretum, postavený podle přiloženého designu (tmavý motiv, červené akcenty).

### Spuštění

```bash
npm install
npm run dev
```

Aplikace poběží na [http://localhost:3000](http://localhost:3000) (případně na
dalším volném portu, pokud je 3000 obsazený).

### Struktura

- `src/app/page.tsx` – hlavní stránka skládající sekce
- `src/components/Header.tsx` – navigace s logem
- `src/components/Hero.tsx` – úvodní sekce s nadpisem a tlačítky
- `src/components/Services.tsx` – řada ikon se službami
- `src/components/WhyChooseAndContact.tsx` – důvody + kontaktní údaje
- `src/components/Footer.tsx` – patička

> Poznámka: pozadí hero sekce je zatím CSS gradient jako placeholder – pro
> přesnou shodu s originálem doplňte reálnou fotografii do `public/` a
> nahraďte gradient v `Hero.tsx` obrázkem (`next/image` s `fill`).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
