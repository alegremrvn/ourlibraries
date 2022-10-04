const express = require('express')
const app = express()

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

let PORT = 3000
app.listen(PORT, () => {
  console.log(`Now live at ${PORT}`)
})