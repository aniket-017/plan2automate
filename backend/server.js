import app from "./app.js";

const PORT = process.env.PORT || 3999;

const server = app.listen(PORT);

server.on("listening", () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
    console.error("Stop the other process, or run: $env:PORT=3001; npm run dev");
  } else {
    console.error("Failed to start server:", err.message);
  }
  process.exit(1);
});
