# NPM scripts: SIGINT problem

Run `node file.js` and then Ctrl+C. You'll see a hundred `Shutting down...` messages, then wait a second and the process will be finished.

On the other hand, if you run `npm run dev`, the process will be killed much earlier.
