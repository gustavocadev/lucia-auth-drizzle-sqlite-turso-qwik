# Username & password example with Lucia and Qwik City

> ❗⚠️You may also be interested in this project [qwik-lucia](https://github.com/gustavocadev/qwik-lucia), which gonna help you to integrante Lucia v3 in your qwik projects easily, there are many [examples](https://github.com/gustavocadev/qwik-lucia/tree/main/examples) as well!

This example uses `@libsql/client` with Turso and Drizzle ORM.

```bash
# install dependencies
pnpm i

# run drizzle kit
pnpm db:push

# run dev server
pnpm dev
```

## Runtime

This example is built for Node.js 20. If you're using Node.js 16/18, un-comment the following lines in `auth/lucia.ts`:

```ts
// import "lucia/polyfill/node";
```

## User schema

| id          | type     | unique |
| ----------- | -------- | :----: |
| `id`        | `string` |   ✓    |
| `username`  | `string` |   ✓    |
| `name`      | `string` |        |
| `last_name` | `string` |        |
| `email`     | `string` |   ✓    |
