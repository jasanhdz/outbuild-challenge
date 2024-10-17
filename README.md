# OutBuild Challenge

## Table of Contents

- [OutBuild Challenge](#outbuild-challenge)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Login](#login)
    - [Dashboard](#dashboard)
    - [Test Credentials](#test-credentials)
  - [Project Architecture](#project-architecture)
    - [Folder structure](#folder-structure)
  - [Core Folders Description](#core-folders-description)
  - [Libraries and Tools](#libraries-and-tools)
    - [Frontend](#frontend)
  - [State Management](#state-management)
  - [API Communication](#api-communication)
  - [Session Management and Authentication](#session-management-and-authentication)
  - [Development and Code Quality](#development-and-code-quality)
  - [Best Practices](#best-practices)
  - [Contributions](#contributions)
  - [License](#license)
  - [Links](#links)
  - [Contact](#contact)

## Description

OutBuild Challenge is a web application developed with React and TypeScript that implements a robust authentication system, handling Efficient state management with Zustand, and data request optimization using React Query. The app follows a mobile-first approach to ensure a smooth user experience on mobile devices and adapt responsively to larger screen sizes.

**Deployment URL:** [https://outbuild-challenge-g90gjiehh-jasan-hernndezs-projects.vercel.app](https://outbuild-challenge-g90gjiehh-jasan-hernndezs-projects.vercel.app)

## Features

- **Secure Authentication**: Implement login with validation and session management using JWT and cookies.
- **Efficient State Management**: Use Zustand to manage the global state of the user's session.
- **Data Handling with React Query**: Optimize data fetching and management with caching capabilities and automatic updates.
- **Responsive Interface**: Mobile-first design ensuring compatibility and usability on mobile devices.
- **Reusable Components**: Modular components such as Button, Input and Checkbox for greater maintainability.
- **Performance Optimization**: Lazy loading of components and image optimization to improve loading times.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: JavaScript superset that adds static typing.
- **Vite**: Quick build tool for frontend projects.
- **Tailwind CSS**: CSS utility framework for responsive design.
- **React Router DOM**: Library for handling routes in React applications.
- **Axios**: HTTP client for making requests to APIs.
- **Zustand**: State management library for React.
- **React Query (@tanstack/react-query)**: Library for efficient data management and caching.
- **React Icons**: Collection of icons for React.
- **ESLint and Prettier**: Linting and code formatting tools.
- **Framer Motion**: Library for animations in React.

## Installation

Follow these steps to configure and run the application locally.

### Prerequisites

- **Node.js**: Make sure you have the latest version of [Node.js](https://nodejs.org/) installed.
- **pnpm or npm**: Package managers to install dependencies.

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/your-user/outbuild-challenge.git
cd outbuild-challenge
```

2. Install Dependencies

Using pnpm:

```bash
pnpm install
```

or npm or yarn

```bash
yarn install
```

3. Run the Application in Development Mode

Using pnpm

```bash
pnpm run dev
```

Or using Yarn

```bash
yarn dev
```

The application will be available at http://localhost:3000 by default.

4. Build for Production

Using pnpm

```bash
pnpm run build
```

Or using Yarn

```bash
yarn build
```

5. Previewing the Production Build

Using pnpm

```bash
pnpm run preview
```

Or using Yarn

```bash
yarn preview
```

## Usage

### Login

1. Go to the login page.
2. Enter your email and password.
3. Optionally, check the "Remember me" box to stay logged in.
4. Click "Login" to access the Dashboard.

### Dashboard

Once authenticated, you will be taken to the Dashboard where you will see a list of comments. The app implements infinite scroll to load more comments automatically as you scroll.

### Test Credentials
To perform tests on the application, use the following credentials:

```ts
export const USER = {
email: 'prologin@prologin.com',
password: 'ProLogin123456',
}
```

## Project Architecture

### Folder structure

```
outbuild-challenge/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   ├── Loader.tsx
│   │   ├── Modal.tsx
│   │   ├── Comment.tsx
│   │   ├── CommentModal.tsx
│   │   └── CommentsList.tsx
│   ├── constants/
│   │   ├── auth.ts
│   │   └── route-paths.ts
│   ├── hooks/
│   │   ├── useComments.ts
│   │   └── useGet.ts
│   ├── pages/
│   │   ├── LoaderScreen.tsx
│   │   ├── NotFound.tsx
│   │   ├── login/
│   │   │   ├── Login.tsx
│   │   │   └── LoginUI.tsx
│   │   └── dashboard/
│   │       └── Dashboard.tsx
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── PublicRoute.tsx
│   │   └── RootRoute.tsx
│   ├── store/
│   │   └── session-store.ts
│   ├── types/
│   │   ├── auth.ts
│   │   ├── comments.ts
│   │   └── route.ts
│   ├── utils/
│   │   ├── getRandomAvatarId.ts
│   │   └── jwtUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md

```

## Core Folders Description

- ``api/``: Configurations and functions to interact with external APIs using Axios.
- ``components/``: Reusable application components such as buttons, inputs, modals, etc.
- ``constants/``: Definition of constants used in the application, such as routes and authentication settings.
- ``hooks/``: Custom hooks to encapsulate reusable logic, such as handling comments and HTTP requests.
- ``pages/``: Page components that represent different views of the application (Login, Dashboard, NotFound).
- ``routes/``: Configuration of routes using React Router, including public and private routes.
- ``store/``: Implementation of global state management using Zustand.
- ``types/``: Definition of TypeScript types to improve typing and avoid errors.
- ``utils/``: Utility functions such as JWT token generation and verification.
- ``App.tsx``: Application root component that configures routing and session management.
- ``main.tsx``: Application entry point where the root component is rendered.
- ``index.css``: Global styles file, configured with Tailwind CSS.

## Libraries and Tools

### Frontend

- **React**: Library for building user interfaces declaratively.
- **TypeScript**: Adds static typing to JavaScript, improving maintainability and reducing errors.
- **Vite**: Build tool that offers fast startup times and instant reloads during development.
- **Tailwind CSS**: CSS utility framework that makes it easy to create responsive and customizable layouts.
- **React Router DOM**: Handles routing in React applications, allowing navigation between different views.
- **React Icons**: Collection of popular icons easily integrated into React components.
- **Framer Motion**: Library for declarative and physical animations in React.

## State Management

- **Zustand**: Lightweight state management library for React, offering a simple and efficient API.
- **React Query (@tanstack/react-query)**: Handles data fetching, caching, and synchronization efficiently.

## API Communication

- **Axios**: Promise-based HTTP client for making requests to RESTful APIs.

## Session Management and Authentication

- **Jose**: Library for handling JSON Web Tokens (JWT), allowing the generation and verification of secure tokens.
- **JS-Cookie**: Handles the creation, reading, and deletion of cookies in the browser.

## Development and Code Quality

- **ESLint**: Linting tool to identify and report patterns in code that may lead to errors.
- **Prettier**: Code formatter to maintain a consistent style.
- **TypeScript ESLint**: Integrate ESLint with TypeScript for static code analysis.

## Best Practices

1. **Mobile-First Approach**: Design for mobile devices first, ensuring an optimal experience on small screens before adapting to larger devices.

2. **Reusable Components**: Create modular and reusable components to improve maintainability and reduce code duplication.

3. **Efficient State Management**: Use Zustand to manage global state in a lightweight and efficient way, avoiding excess complexity.

4. **Data Request Optimization**: Implement React Query to handle data fetching and caching, improving performance and user experience.
5. **Strict Typing with TypeScript**: Define explicit types to avoid typing errors and improve code completion and documentation.
6. **Accessibility**: Ensure the application is accessible to all users, including the use of ARIA tags and proper focus management.
7. **Performance Optimization**: Implement techniques such as lazy loading, image optimization, and list virtualization to improve performance.
8. **Style Consistency**: Maintain a consistent color palette and styles using Tailwind CSS for a professional and cohesive look.
9. **Error Handling**: Implement appropriate error handlers to improve application resiliency and provide clear feedback to the user.

## Contributions

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.

2. Create a branch for your feature or bug fix.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes and make sure to follow the best practices mentioned above.

4. Add your changes to the staging.

```bash
git add .
```

5. Commit your changes.

```bash
git commit -m "Add new feature"
```

6. Push your changes to the remote repository.

```bash
git push origin feature/new-feature
```

7. Open a Pull Request on GitHub.

## License
- MIT

## Links
- Deploy: https://outbuild-challenge-g90gjiehh-jasan-hernndezs-projects.vercel.app

## Contact

If you have any questions or suggestions, feel free to contact me:

- Email: jasan814@gmail.com
- [LinkedIn](https://www.linkedin.com/in/jasanhdz/)
- [GitHub](https://github.com/JasanHdz)

Thanks for using OutBuild Challenge! We hope you enjoy working with our app. 🚀