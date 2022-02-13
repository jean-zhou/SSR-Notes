import express from 'express';
import App from './components/App';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

const app = express();
app.get('/', (req, res) => {
  const arr = [1, 2, 3,];
  // const html = renderToString(<App list={arr} />)
  const html = renderToStaticMarkup(<App list={arr} />)

  res.send(html);
})
const port = 3000;
app.listen(port, () => {
  console.log('listening on:', port);
})
