## Implementation details

I have set up the project structure using **`Next.js`** with **`TypeScript`** and **`Tailwind CSS`**, organizing the codebase into multiple folders for better maintainability.

This project includes several common libraries: `redux`, `redux-toolkit`, `recharts`, `react-circular-progressbar`, `styled-components`, and `classnames`.

The **`theme`** is managed through the **`tailwind.config.ts`** file, where colors can be customized as needed.

For state management, mock data for articles and meal history is stored in the `Redux Store`.

I have created a script in folter `scripts/generate-icons.js` that automatically generates component declarations from SVG files. This allows us to import and use them as React components effortlessly by following these two steps:
  - Step 1: Copy the SVG icon into the `icons` folder.
  - Step 2: Run the command: `node scripts/generate-icons.js` and then double-check the file `icons/index.ts` to see the result if you want.

Additionally, I have implemented a simple Login page to demonstrate the Authentication and Authorization process. Currently, no tokens are stored.


## Available scripts

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
