<!-- PRESENTATION -->
<br />
<p align="center">
  <h1 align="center">Parrot - Coding Challenge</h1>

  <p align="center">
    Solution proposal for the Parrot Frontend React Challenge
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Technical Specifications](#technical-specifications)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [File structure](#file-structure)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Welcome to my solution proposal for the Parrot challenge! In this repository you will find my solution to the coding challenge of creating a web application that allows the user, see the products of certain store after login with their credentials.

### Technical Requirements

-   [x] Using the React framework
-   [x] Use of Redux or similar technology
-   [x] Support for multiple screen sizes
-   [x] Instructions for construction and deployment
-   [x] Test relevants parts of the application:
    -   [x] Test store actions
    -   [x] Test store reducers
    -   [ ] Test store sagas
    -   [x] Test pages
    -   [x] Test components

Login Screen

-   [x] Login by username and password
-   [x] Visual clues in case of any errors
-   [x] Visual clues in case of any errors
-   [x] Visual clues in case of any errors
-   [x] Visual clues when information is being sent to the server.
-   [x] If the user authenticated correctly, this screen will be skipped in future sessions.

Menu Edition Screen

-   [x] List with the categories of a menu.
-   [x] Each element (Category) will have to show:
    -   [x] Name
    -   [ ] Number of elements it contains.
    -   [x] The user will have the option to expand to show a sub-list with the sub-items it contains.
-   [x] Each sub-element (Product) will have to show at least:
    -   [x] Name
    -   [x] Image
    -   [x] Price
    -   [x] Status (Available / Not Available)
    -   [x] Indentation to differentiate it from its father.
    -   [x] It can be enabled / disabled, this will modify its status on the server and its visual appearance.
-   [x] The related web services will be protected and can only be used by sending the token provided at login.
-   [ ] A token expires after 25 minutes. It can auto-refresh.
-   [x] An expired token is deleted after 30 minutes. You have to log in again to get a new one.
-   [ ] If an item changes status in the backoffice, this should be reflected in real time on the site.

### Built With

For the development of this project, the main technologies I used were:

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [Formik](https://formik.org/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Jest](https://jestjs.io/)
-   [Redux-Saga-Test-Plan](http://redux-saga-test-plan.jeremyfairbank.com/)
-   [Material-UI](https://mui.com/)

<!-- GETTING STARTED -->

## Getting Started

To download and run the project, please follow these steps:

### Prerequisites

Before running this project, make sure you have installed a [Node](https://nodejs.org/) version higher than 16.14.0

### Installation

1. Clone the repo

```sh
git clone https://github.com/CitlalliDMG/bitso-frontend-challenge.git
```

2. Install dependencies

```sh
npm install
```

3. Run the development server:

```sh
npm run start
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Log in using the credentials that come in the coding challenge PDF

6. Create the application build

```sh
npm run build
```

7. Run tests with or without coverage:

```sh
npm run test
```

```sh
npm run test:coverage
```

### File structure

The project folder should contain the following files:

```text
./parrot-cc/
├── coverage
├── node_modules
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── safari-pinned-tab.svg
├── src
│   ├── components
│      ├── Layout.tsx
│      ├── LoginForm.tsx
│      ├── RequireAuth.tsx
│      ├── TabMenu.tsx
│   ├── interfaces
│      ├── IResponseData.ts
│      ├── IResponseGenerator.ts
│      ├── IToken.ts
│   ├── pages
│      ├── LoginPage.tsx
│      ├── MenuPage.tsx
│      ├── NotFoundPage.tsx
│   ├── services
│      ├── constants.ts
│      ├── data.ts
│      ├── endpoints.ts
│      ├── login.ts
│   ├── store
│      ├── actions
│         ├── AActionTypes.ts
│         ├── AData.ts
│         ├── AError.ts
│         ├── ALogin.ts
│         ├── ALogout.ts
│      ├── reducers
│         ├── index.ts
│         ├── RData.ts
│         ├── RError.ts
│         ├── RLogin.ts
│      ├── sagas
│         ├── index.ts
│         ├── SData.ts
│         ├── SLogin.ts
│         ├── SLogout.ts
│      ├── index.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── parrot-logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
├── .editorconfig
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

<!-- USAGE EXAMPLES -->

## Usage

Once you have the project running on the test server, you will see a login interface.

Log in using the credentials available in the PDF of the coding challenge, and you will be redirected to the menu edition page.

Explore different categories and interact with the products, and when you are ready, use the option in the user icon to log out.

<!-- CONTRIBUTING -->

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourInitials_AmazingFeature`)
3. Commit your Changes (`git commit -m '[type] Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

Citlalli Del Moral - [portfolio](https://citlallidmg.github.io/) - citlallidmg@gmail.com

Project Link: [https://github.com/CitlalliDMG/parrot-cc](https://github.com/CitlalliDMG/parrot-cc)
