#! /usr/bin/env node

import { scanner } from "@helptheweb/scanner";
import express from 'express';

const getReport = async (url) => {
  let n = await scanner(url);

  return n;
}

const app = express()
const port = 1234;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/report', async (req, res) => {
  const report = await getReport(req.query.url);

  res.send(report);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})