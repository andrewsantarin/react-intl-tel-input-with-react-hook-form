# react-intl-tel-input-with-react-hook-form

This example shows how to use [`react-hook-form`](https://react-hook-form.com/) with [`react-intl-tel-input`](https://patw0929.github.io/react-intl-tel-input).

## Assumptions

1. **You use TypeScript.**
   - JavaScript authors can still benefit from this example. Just assume no types are required on your end.

2. **This project uses a _fork_ of `react-intl-tel-input`**.
   - The fork is located here: https://github.com/andrewsantarin/react-intl-tel-input/tree/feature/typescriptSupport and is published as [`@andrewsantarin/react-intl-tel-input`](https://www.npmjs.com/package/@andrewsantarin/react-intl-tel-input).
   - The fork exists as a temporary way to get **full TypeScript support** while [the pull request](https://github.com/patw0929/react-intl-tel-input/pull/351) on the main library is still pending review.
   - On [package.json](./package.json), the `react-intl-tel-input` package is aliased to `npm:@andrewsantarin/react-intl-tel-input@latest`. You may choose to do the same to your projects using this install procedure:

      ```sh
      npm i -S react-intl-tel-input@npm:@andrewsantarin/react-intl-tel-input@latest # NPM
      yarn add react-intl-tel-input@npm:@andrewsantarin/react-intl-tel-input@latest # Yarn
      ```

## Usage

Follow [the `create-react-app` README](./docs/create-react-app/README.md) for the procedures.
