# React + TypeScript + Vite

This template provides a minimal setup to get React working with Vite, including HMR and some ESLint rules.

Currently, two official plugins are available.

## Using TypeScript to build a dynamic product

## Project Architecture (folder: /src)

- **components** → Project components
  - `ProductCard`
    - `ProductCard.tsx` (component logic)
    - `ProductCard.scss` (component styles)

- **uicomponents** → Reusable UI components
  1. Button
  2. Dark Mode
  3. Image
  4. Input
  5. Modal
  6. Error Message
  7. SpanColor

- **data** → `index.ts` (contains arrays of objects used in the project)

- **interfaces** → `index.ts` (types and interfaces, e.g. `IProduct`, `IFormList`)

- **utils** → `index.ts` (helper functions exported for reuse)

- **validation** → Schema for form validation data

### Libraries
- Using the library **generate-react-cli** to build components automatically.
