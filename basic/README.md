# Basic example

The most basic example of a pnpm workspace in a multi-package mono repo.

## Project layout

This project contains a main (root) package and two sub-packages under the `packages` directory.

```
└───basic
    │   package.json        Root project metadata.
    │   pnpm-lock.yaml      Dependencies lockfile.
    │   pnpm-workspace.yaml Pnpm workspace configuration.
    │ 
    ├───packages
    │   ├───a                Sub-package a.
    │   └───b                Sub-package b.
    └───index.js            Code file for the root package.
```

## Setup

You need [`pnpm` installed](https://pnpm.io/installation):

```bash
npm install -g pnpm
```

Open a terminal, change to the directory and install dependencies:

```bash
cd basic
pnpm install
```

Please note the following:
- Only a single `pnpm install` is required to install packages for all packages in the workspace.
- pnpm creates sym links to create the dependencies between packages in the workspace.
- The root package depends on sub-packages `a` and `b`. 
- Package `b` depends on package `a`.
- If you look in the `node_modules` directory for the root package and package `b` you'll see sym links to their dependencies within the mono repo.

## Try out the code

```bash
npm start
```



