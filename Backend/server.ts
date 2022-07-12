import express from 'express'
import errorHandler from './helpers/errorHandler'
import mainRouter from './routes'
import cors from 'cors'
import 'dotenv/config'


const port = process.env.PORT || 8000
const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false, limit: '5MB' }))
app.use(express.json({ limit: '5MB' }))
app.use('/apis', mainRouter)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})