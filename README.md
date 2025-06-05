## test-vite-wrangler-async-io

This is a repro of a bug, where async i/o does NOT throw an error when runing `vite dev` with the cloudflare plugin.

- `npm run vdev` to run `vite dev`
- `npm run wdev` to run `wrangler dev`

Expected:

- `vite dev` should throw an error because of the async i/o
- `wrangler dev` should also thrown an error because of the async i/o

Actual:

- `vite dev` does NOT throw an error, runs fine (this not expected!)
- `wrangler dev` does throw an error, as expected
