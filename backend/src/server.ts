import express from 'express'
import router from './router'

import 'reflect-metadata'
import './database'

const app = express()

app.use(router)

app.listen(3333, () => {
  console.log('Server is running!')
})
