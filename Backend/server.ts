import express from 'express'
import errorHandler from './helpers/errorHandler'
import mainRouter from './routes'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json())
app.use('/apis', mainRouter)
app.use(errorHandler)

app.listen(8000, () => {
  console.log(`App running in http://localhost:8000`)
})