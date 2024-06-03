import mongoose from "mongoose"

const timerSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  setTimer: {
    type: Number,
    required: true,
  },
})

const Timer = mongoose.model("Timer", timerSchema)

export default Timer
