# basic

The most basic example of a pnpm workspace in a multi-package mono repo.

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



