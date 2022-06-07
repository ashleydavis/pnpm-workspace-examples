# Backend

A simple todo list REST API

To run it in prod:

```bash
pnpm start
```

To run it in development (with live reload):

```bash
pnpm run start:dev
```

The backend is available at http://localhost:3000 and exposes routes:
- HTTP POST `/todo`
- HTTP GET `/todos`

Use `./test/backend.http` to try out HTTP requests against the backend REST API.