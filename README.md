# Template for CAS FEE ADV Design System

This is a template repository for the CAS FEE ADV design system part.
It is configured to automatically provide GitHub Actions to build and deploy
your design system as a static page and your component library to the
GitHub package registry.

## Getting started

After creating your assignment from this template, you'll need to install
storybook and the base of your component library by yourself.

## Deployment

This repository is configured to automatically deploy your design system
to GitHub Pages and the component library to the GitHub package registry.

Please ensure the following prerequisites are met:

- Storybook
  - Your `package.json` contains a `build-storybook` script
  - The resulting build is located in the `storybook-static` directory
- Component Library
  - Your `package.json` contains a `build` script
  - When trying with `npm pack`, all your required files are included in the resulting tarball
  - Your `package.json` file contains the correct _scope_ for your package (`@smartive-education`)
  - The `package.json` file contains the correct registry

# Design System - Component Library Byetlight

The Mumble Design System provides you with guidelines, components and templates to boost the user experience of your
product.

## About

The new Mumble Design System was launched in early 2023 and will be implemented across the organization,
strengthening Mumble's brand image through consistent representation.

## Purpose

The purpose of this project is to create a unified toolkit that is used by UX-designers and developers on their
projects alike to ensure all Mumble projects are appealing and have a consistent look and feel across the board by
following Mumble's design and implementation guidelines.

## Toolkit

By unifiying design elements into reusable components, development will simplify and accelerate the development of
these digital products. The guide is a living document created to meet the needs of Mumble's front-end developers
and designers. If there is a component or pattern you need or you have any other feedback, question or comment
please contact us.

Your feedback is highly appreciated! You can create a new Issue [here](https://github.com/smartive-education/design-system-component-library-bytelight/issues).

## How to use it in a Next.js App

### Create Next.js App

```console
npx create-next-app@latest --typescript
```

Additional information can be found [here](https://nextjs.org/docs/getting-started).

### Authenticating GitHub Registry

1. Create a personal GitHub access token.
2. Create a new ~/.npmrc file if one doesn't exist.
3. Include the following line, replacing TOKEN with your personal access token.

```console
@smartive-education:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=[TOKEN]
```

Additional information can be found [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### Install Package from GitHub Registry

```console
npm install @smartive-education/design-system-component-library-bytelight@latest
```

### Install Tailwind CSS

1. Install Tailwind CSS
2. Make your app use the Tailwind presets of this Design System. Include the following code snippet
   to the tailwind.config.js.

```javascript
  presets: [
    require("@smartive-education/design-system-component-library-bytelight/byteLightTailwind"),
  ],
```

3. Make this Component Library use the Tailwind CSS of the App. Include the following code snippet
   to the tailwind.config.js.

```javascript
content: [
    ...
   "./node_modules/@smartive-education/design-system-component-library-bytelight/dist/**/*.{js,ts,jsx,tsx}"
],
```

Additional information can be found [here](https://tailwindcss.com/docs/guides/nextjs).

## Usage

The Usage of a certain component can be found at the Docs tab of the corresponding story.
It's only necessary to add an import-statement for the component.

```javascript
import {...} from "@smartive-education/design-system-component-library-bytelight";
```
