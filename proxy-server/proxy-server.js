// proxy-server.js

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', createProxyMiddleware({
  target: 'https://api.diceblox.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix when forwarding
  },
}));

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
