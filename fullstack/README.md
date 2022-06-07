# fullstack

A fullstack example of a pnpm workspace.

## Setup

Install dependencies:

```bash
cd fullstack
pnpm install
```

## Run in production

Run the fullstack application in production mode (well, simulating production):

```bash
pnpm start
```

## Run in development

Run the fullstack application in development mode (with live reload enabled in the backend):

```bash
pnpm run start:dev
```

Point your browser at http://localhost:1234 to see the frontend.

Use `./backend/test/backend.http` to try out HTTP requests against the backend REST API.