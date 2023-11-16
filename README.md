<p align="center">
  <a href="" rel="noopener">
 <img height="500px" style="object-fit: cover;" src="public\logo-vertical.svg" alt="Project logo"></a>
</p>

<h1  align="center">SCHOOLABS PROJECT</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues-raw/amieow/sturdy-fortnight.svg)](https://github.com/amieow/sturdy-fortnight/issues)
[![GitHub Pull Requests](https://img.shields.io/github/forks/amieow/sturdy-fortnight.svg)](https://github.com/amieow/sturdy-fortnight/pulls)

</div>

## 📝 Table of Contents

- [About](#about)
- [Folder Structure](#folder_structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Csontributor](#contributor)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a id="about" name = "about"></a>

SchooLabs is a new start up company and they want to build a website that offers a range of online courses for UI/UX Designers and Developers. The website aims to offer a user-friendly interface and visually appealing platform, the platform must be easy for learners to discover, access and engage with online courses.

## 📁 Folder Structure <a id="folder_structure" name = "about"></a>

1. **app** (main application router) :
   - This folder contains the main application router.
2. **components** :
   - **atoms** :
     - This folder contains the smallest building blocks of the application,
       such as buttons, inputs, and labels.
     - **ui** :
       - This folder contains the UI dependencies.
   - **organisms** :
     - This folder contains more complex components that are composed of atoms,
       such as forms, cards, and modals.
     - **[url]** :
       - This folder contains URL related section.
   - **molecules** :
     - This folder contains medium complexity components that are composed of
       atoms.
   - **templates** :
     - This folder contains layout templates for pages.
3. **contents** :
   - This folder contains the content of the application, such as text, images,
     and videos.
4. **context** :
   - This folder contains the context providers and hooks used to manage the
     state of the application.
5. **lib** :
   - This folder contains utility functions and classes used throughout the
     application.
6. **utils** :
   - This folder contains utility functions and classes that are specific to the
     application.
7. **public** :
   - This folder contains image files that are publicly available.

## 🎈 Usage <a id="usage" name="usage"></a>

### Running the Application Locally

To run your Next.js application locally, follow these steps:

1. Install the required packages by running `npm install` in your project
   directory.
2. add the environment variable
3. Build the application by running `npm run build`.
4. Start the development server by running `npm run dev`.
5. Visit `http://localhost:3000` in your web browser to view the application.

For more information on running a Next.js application locally, check out the
official documentation.

## 🚀 Deployment <a id="deployment" name = "deployment"></a>

The fastest way to deploy a Next.js application is by using Vercel. Vercel
automatically detects Next.js and runs `next build` when you push your code to a
Git repository. It also optimizes the build output for you, including:

- Persisting cached assets across deployments if unchanged
- Immutable deployments with a unique URL for every commit

To deploy your Next.js application to Vercel, follow these steps:

1. Create an account on Vercel.
2. Connect your Git repository to Vercel.
3. Configure your deployment settings, such as environment variables and custom
   domains.
4. Deploy your application.

For more information on deploying a Next.js application, check out the
[official documentation](https://nextjs.org/docs).

## ⛏️ Built Using <a id="built_using" name = "built_using"></a>

### 📚 Dependencies

#### 📝 Form & Validation Libraries

- `@hookform/resolvers` version `^3.3.1`: Resolvers for React Hook Form,
  providing validation functionality.
- `react-hook-form` version `^7.47.0`: A performant and flexible library for
  managing forms in React.
- `zod` version `^3.22.4`: A TypeScript-first schema declaration and validation
  library.

#### 🎨 UI Libraries

- `@radix-ui/react-accordion` version `^1.1.2`: Radix UI library component for
  creating accessible accordions in React.
- `@radix-ui/react-avatar` version `^1.0.3`: Radix UI library component for
  creating avatars in React.
- `@radix-ui/react-checkbox` version `^1.0.4`: Radix UI library component for
  creating customizable checkboxes in React.
- `@radix-ui/react-dialog` version `^1.0.4`: Radix UI library component for
  creating accessible dialogs in React.
- `@radix-ui/react-icons` version `^1.3.0`: Radix UI library for rendering icons
  in React.
- `@radix-ui/react-label` version `^2.0.2`: Radix UI library component for
  creating accessible labels in React.
- `@radix-ui/react-popover` version `^1.0.6`: Radix UI library component for
  creating popovers in React.
- `@radix-ui/react-progress` version `^1.0.3`: Radix UI library component for
  creating progress bars in React.
- `@radix-ui/react-scroll-area` version `^1.0.5`: Radix UI library component for
  creating scroll areas in React.
- `@radix-ui/react-select` version `^1.2.2`: Radix UI library component for
  creating accessible select menus in React.
- `react-slick` version `^0.29.0`: A carousel component built with React.
- `slick-carousel` version `^1.8.1`: Carousel component for React built on top
  of the slick carousel library.

#### 🎛️ State Management Libraries

- `zustand` version `^4.4.1`: A small, fast, and scalable state management
  library for React.

#### 🚀 Frameworks

- `next` version `13.5.5`: A React framework for building server-rendered React
  applications.
- `react` version `^18`: A JavaScript library for building user interfaces.
- `react-dom` version `^18`: React package for working with the DOM.

#### 🛠️ Build Tools

- `autoprefixer` version `10.4.15`: A PostCSS plugin to parse CSS and add vendor
  prefixes.
- `eslint` version `^8.50.0`: A pluggable JavaScript linter.
- `eslint-config-next` version `13.4.19`: ESLint configuration for Next.js
  projects.
- `postcss` version `8.4.28`: A tool for transforming styles with JavaScript
  plugins.
- `sharp` version `^0.32.6`: A high-performance image processing library.
- `tailwind-merge` version `^1.14.0`: A utility for merging Tailwind CSS
  classes.
- `tailwindcss` version `3.3.3`: A utility-first CSS framework.
- `tailwindcss-animate` version `^1.0.7`: An extension for adding animations to
  Tailwind CSS.
- `typescript` version `5.2.2`: A superset of JavaScript that adds static types.

#### 🧰 Utilities

- `class-variance-authority` version `^0.7.0`: A utility for managing class
  variance in JavaScript.
- `clsx` version `^2.0.0`: A tiny utility for conditionally joining class names
  together.
- `js-cookie` version `^3.0.5`: A simple utility for handling browser cookies.
- `next-themes` version `^0.2.1`: A utility for adding theme support to Next.js
  applications.

### 🔧 Dev Dependencies

The project uses several dev dependencies including:

- `@svgr/webpack` version `^8.1.0`
- `autoprefixer` version `^10`

Please note that the versions of the dependencies are subject to change as the
project evolves.

## ✍️ Contributor <a id="contributor" name = "contributor"></a>

### Developer :

[<img alt="owner profile" style="border-radius: 50px;" width="80" src="https://avatars.githubusercontent.com/u/109803246?v=4"/>](https://github.com/amieow)
[<img alt="owner profile" style="border-radius: 50px;" width="80" src="https://avatars.githubusercontent.com/u/105892570?v=4"/>](https://github.com/SofyanArdiansyah888)

---

### UI/UX :

1. [Muhammad Rizal Saputra ](https://www.linkedin.com/in/mrzls1998/)
2. [Fatahillah Rahman](www.linkedin.com/in/fatahillah-rahman-1a524525b)
3. [Tiaranisa](https://www.linkedin.com/in/tiaranisa)
4. [Fahrizanur](https://www.linkedin.com/in/fahrizanur-4798b0237)
5. [Yahya](https://www.linkedin.com/in/zamzamialiy/)
6. [Maxdha Maxiwinata](https://www.linkedin.com/in/maxdha-maxiwinata-a66a761b6)

## 🎉 Acknowledgements <a id="acknowledgement" name = "acknowledgement"></a>

- Hat tip to anyone whose code was used.
- **References**
  - **Chat - gpt** : An AI model that generates the documentation .
  - **Bard - ai** : An AI model that generates the documentation .
  - [**Next-js Docs**](https://nextjs.org/docs) : The official documentation of
    Next.js, a React framework for building web applications.
