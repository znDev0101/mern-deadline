import mongoose from "mongoose"

const dbConnection = () => {
  const uri =
    "mongodb+srv://zulfanurhuda01:zulfatasik28@timer-countdown.thkne8y.mongodb.net/?retryWrites=true&w=majority&appName=Timer-countdown"

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Terhubung ke database MongoDB")
    })
    .catch((error) =>
      console.log("Error saat menghubungkan ke database: ", error)
    )
}

export default dbConnection
