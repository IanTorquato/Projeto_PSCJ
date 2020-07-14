import express from 'express'
import path from 'path'

import routes from './routes'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)