import express from 'express'
import errorHandler from './helpers/errorHandler'
import mainRouter from './routes'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false, limit: 300000 }))
app.use(express.json({ limit: 300000 }))
app.use('/apis', mainRouter)
app.use(errorHandler)

app.listen(8000, () => {
  console.log(`App running in http://localhost:8000`)
})