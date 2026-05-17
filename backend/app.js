import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '../frontend/dist')

const app = express()

app.use(express.static(distPath))

app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

export default app
