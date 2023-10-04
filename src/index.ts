import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const userLoginProxy: any = createProxyMiddleware({
  target: "http://localhost:3001",
});

const bookingsProxy: any = createProxyMiddleware({
  target: "http://localhost:3002",
});

app.all("/user/*", (req, res) => {
  userLoginProxy(req, res);
});

app.all("/bookings/*", (req, res) => {
  bookingsProxy(req, res);
});

app.listen(3000, () => {
  console.log("Gateway is Listening to Port 3000");
});
