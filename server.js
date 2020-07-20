const express = require("express")
const path = require("path")
const app = express()

app.get("*.pdf", (req, res) => {
  res.sendFile(path.join(__dirname, `pdf/${req.url.split("/")[2]}`), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/images/:name', (req, res) => {
  res.sendFile(path.join(__dirname, `images/${req.params.name}`), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(path.join(__dirname, "dist")))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(8080, () => console.log("express server started at port 8080"))