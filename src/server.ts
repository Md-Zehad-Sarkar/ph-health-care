import next from "next";

const hostname = "localhost";
const port = 5000;
const dev = process.env.NODE_ENV !== "production";
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
