import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const handleCreateTimer = async () => {
    const data = {
      uuid: "2525253asdhhas",
      setTimer: 6969696934,
    }

    const res = await fetch("https://mern-deadline-api.vercel.app/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return res.json()
  }

  const getAllData = async () => {
    const response = await fetch("https://mern-deadline-api.vercel.app/getData")
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
