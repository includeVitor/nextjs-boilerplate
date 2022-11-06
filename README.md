## Nextjs13 boierplate

[![Main CI](https://github.com/includevitor/next13-boilerplate/actions/workflows/main.yml/badge.svg)](https://github.com/includevitor/next13-boilerplate/actions/workflows/main.yml)

# Setup

# Technologies

-   [ReactJS](https://reactjs.org/)
-   [NextJS](https://nextjs.org/blog/next-13)
-   [@next/font](https://beta.nextjs.org/docs/optimizing/fonts)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Prettier](https://prettier.io/)
-   [Husky](https://typicode.github.io/husky/#/)

# Using this repo

Install all dependencies

```
    yarn
```

Executes the website in http://localhost:3000/

```
    yarn dev
```

Running tests in watch mode (mostly used for development)

```
    yarn test
```

Running tests and export the reports to repo /output/coverage (mostly used for collect metrics)

```
    yarn test:coverage
```

Updating snapshot tests

```
    yarn test:u
```

Formatting all files using prettier

```
    yarn format
```

Building for production

```
    yarn build
```

```
    yarn start
```

# How to contribute

We use trunk based development

-   We have a branch MAIN
-   To contribute you have to create a branch based on a main branch
-   Generate a Pull Request
-   After Merge your Pull Request
-   Your code will be on the Main branch waiting for a release publish
