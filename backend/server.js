import express from "express"
import cors from "cors"
import { getAllData, createData } from "./controllers/timerContoller.js"
import configDb from "./config/configDb.js"

const app = express()
const port = 3000

app
  .use(
    cors({
      origin: "https://mern-deadline.vercel.app",
      methods: ["POST", "PUT", "GET"],
    })
  )
  .use(express.json())
  .listen(port, () => console.log(`Alamat Server: http://localhost:${port}`))

// Koneksi ke Database MongoDB
configDb()

app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("MERN STACK CONNECTED HAPPY CODE")
})

// Operasi Read (GET) Data
app.get("/getData", getAllData)
// Operasi Cari Data
// app.get("/search", searchData)
// Operasi Create (POST) Data
app.post("/create", createData)
// Operasi Update (PUT) Data
// app.put("/update", updateData)
// Operasi Delete (DELETE) Data
// app.delete("/delete", deleteData)
