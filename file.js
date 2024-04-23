process.once("SIGINT", async () => {
  for (let i = 0; i < 100; ++i) {
    console.log(`Shutting down ${i}`);
  }

  console.log("Waiting...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Wait done!");

  process.exit(0);
});

(async () => {
  while (true) {
    console.log("tick");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
