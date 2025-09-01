# Project Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/) for building the user interface.

The project is structured as a standard Next.js application with the `src` directory containing the main application code. The `src/app` directory contains the pages and layouts, and the `src/components` directory contains the UI components. The `src/components/ui` directory specifically holds the components from the `shadcn/ui` library.

# Building and Running

To get started with the development server, run the following command:

```bash
npm run dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

To create a production build, run the following command:

```bash
npm run build
```

To start the production server, run the following command:

```bash
npm run start
```

To run the linter, use the following command:

```bash
npm run lint
```

# Development Conventions

*   **TypeScript:** The project uses TypeScript with strict mode enabled. All new code should be written in TypeScript.
*   **Path Aliases:** The project uses the path alias `@/*` for the `src` directory. This should be used when importing modules from the `src` directory.
*   **UI Components:** The project uses `shadcn/ui` for its UI components. These components are located in the `src/components/ui` directory. When adding new UI components, they should be added to this directory.
