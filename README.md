# next-saas-notes-app

## Getting Started

To bootstrap a Next.js app fast, type `npx create-next-app`.

To do it manually, do this:

`npm init -y`

Then:

`npm i next react react-dom -S`

### Scripts

`npm run dev` runs Next.js, in dev mode.
`npm run build` gets it ready for production
`npm run start` runs that build.

### Routing

Next.js comes out of the box with some conventions around routing. In particular, anything in the pages folder will render at the route the filename has.

For a folder, add a folder in pages. So like ourwebsite.com/settings/home -> create settings folder in pages folder.

For params, use `[]` syntax, e.g., `[id].js`.

Use `useRouter` - `import { useRouter } from 'next/router'`. See pages/notes/[id].js for how to implement.

#### Catch-all routes:

Name a file like notes/[...param].js and it will catch all the params in the URL, if we want to have multiple params in the URL.

You can also do an optional catch-all, like [[...params]].js. It includes the parent object as well.

#### Non-Pages

What about components that we want to reuse, like a button component?
We typically create a `src` folder in root, and then `components` in src.
