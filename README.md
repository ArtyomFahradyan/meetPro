# hoory-frontend

This mono repository contains React web projects for the admin panel, wizard and widget of Hoory.<br />
It was bootstrapped using [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces).<br />
The admin, wizard and widget projects are stand-alone React applications bootstrapped with [CRA](https://github.com/facebook/create-react-app) which live in their respective directories under the `packages` directory.<br />
Other packages are primarily used for sharing code between these projects.<br />
All subdirectories of the `packages` directory have their own `package.json` file and `node_modules` folder. Therefore, they should be treated as separate projects.<br />
Common dependencies between packages will automatically be hoisted to the root directory.

## Available Scripts

In the project directory, you can run:

### `yarn`

> This is the same as running `yarn install` or `yarn bootstrap` (which will run `lerna bootstrap`).
Installs the dependencies for all packages.

**Note: you do not need to run `yarn install` in each package separately.**

### `yarn clean`

Deletes the `node_modules` directory from **all** packages.

**Note: this will not delete `node_modules` in the root directory, you should delete that manually if needed.**

### `yarn build`

Runs the `build` script for **all** packages.

### `yarn lint`

Runs the `lint` script for **all** packages.

## Important Files

You will most likely never need to change these files, but it's good to know what they are doing.

### `.gitignore`

All of the gitignored files are going to be listed in this file in the root directory. Packages are **not** going to have their own `.gitignore` files

### `lerna.json`

Configuration file for [Lerna](https://lerna.js.org). Most importantly, it specifies:

* Version of the project
* Paths of our packages
* Usage of [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
* Husky setup

### `package.json`

Standard `package.json` file for the mono repository. it specifies our workspaces for yarn, and lists all the dependencies and scripts we need for the mono repository itself.

**Note: package specific dependencies should not be specified here**
