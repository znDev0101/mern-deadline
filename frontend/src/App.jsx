import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const handleCreateTimer = async () => {
    const data = {
      uuid: "6969966hahaha",
      setTimer: 69696969,
    }

    const res = await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return res.json()
  }

  const getAllData = async () => {
    const response = await fetch("http://localhost:3000")
    const result = await response.json()
    console.log(result)
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <div className="m-auto">
      <h1>List Timer </h1>

      <h1>Create Timer</h1>
      <div className="flex flex-row gap-y-10">
        <div className="">
          <label htmlFor="">uuid</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">timer</label>
          <input type="number" />
        </div>
        <button onClick={handleCreateTimer}>Create timer</button>
      </div>
    </div>
  )
}

export default App
