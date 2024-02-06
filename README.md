# Calis-Store

This serves as an illustrative model of a commercial website. Please note that the information presented on this site is generated from mock data provided by https://fakeapi.platzi.com/.

## :point_right: [Click here to see on browser](https://calis-store.vercel.app/)

## About the Project

- This project was developed using Next.js 14.0.1 in conjunction with the app router system and TypeScript for robust development. The styling of the application was achieved using the Mantine UI library, ensuring a visually appealing and user-friendly interface.

- Authentication in this web application is implemented using next-auth in combination with credentials, offering a secure login experience for users. Upon logging in, users have access to the functionality of the "Place Order" button on the home page.

- All data utilized within the project is sourced from the https://fakeapi.platzi.com/ API, which provides mock data to populate the website's content.

- The home page is divided into two main sections, both of which consist of carousels. The top carousels showcase product cards, providing an engaging display of various items. Within these product cards, an inner carousel showcases product images, enhancing the user's browsing experience. These carousels are implemented using the @mantine/carousel and @mantine/carousel packages.

- The lower carousel section is dedicated to displaying product categories. By clicking on the category buttons, users are directly redirected to the /products (store) page with the selected category preloaded.

- The /products (store) page offers users the ability to filter products in three different ways: by selecting a category, entering a title, or using a price range slider. To optimize performance, title and range filters leverage a debounce function, located in the util folder, eliminating the need for larger libraries like Lodash.

- For efficient data management and state handling, the project relies on the tanstack query library for all network requests. Selected products are managed using Zustand for state management. Moreover, Zustand, in conjunction with the "persist-and-sync" package, ensures that cart data is also stored in localStorage. This approach allows users to preserve their cart data even when switching between different tabs or refreshing the page.

- The /cart page enables users to manipulate their selected products by increasing, decreasing quantities, or removing items entirely from their shopping cart.

- Lastly, the /checkout page has been created to provide users with the illusion of a successful payment process. It is important to note that this page is static and solely serves for demonstration purposes.

- To enhance the overall user experience and user interface (UI/UX) of the application, the "react-toastify" package has been incorporated.


All data is fetched from the [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) API.

## Used Packages

The following packages are used in the project:

- **@mantine/carousel:** ^7.5.1
- **@mantine/core:** 7.5.1
- **@mantine/form:** ^7.5.1
- **@mantine/hooks:** 7.5.1
- **@mantinex/mantine-logo:** ^1.0.1
- **@next/bundle-analyzer:** ^14.0.1
- **@tabler/icons-react:** ^2.40.0
- **@tanstack/react-query:** ^5.18.1
- **axios:** ^1.6.7
- **embla-carousel-autoplay:** ^7.1.0
- **embla-carousel-react:** ^8.0.0-rc22
- **next:** 14.0.1
- **next-auth:** ^4.24.5
- **persist-and-sync:** ^1.2.1
- **react:** 18.2.0
- **react-dom:** 18.2.0
- **react-toastify:** ^10.0.4
- **zustand:** ^4.5.0

## Installation

You can install the project packages by running the following command:
- `git clone https://github.com/fatihcaliss/calis-store.git` – clone repository to your local
- `cd calis-store` – go to calis-store folder
- `yarn` – install all packages
- `yarn dev` – start project in your local

## Features

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)


### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
