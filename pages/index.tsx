import type { NextPage } from "next"
import React, { useState } from "react"
import { io, Socket } from "socket.io-client"

const Home: NextPage = () => {
  const [roomName, setRoomName] = useState("")
  const [isJoining, setJoining] = useState(false)

  function handleChange() {
    console.log(`on change event here`)
  }
  function handleOnSubmit() {
    const socket = io(`http://localhost:4000`)
    socket.emit("join_room", "room1")
  }

  return (
    <div className="m-4">
      <form onSubmit={handleOnSubmit} className="space-y-2">
        <h4>Enter Room ID to Join the Game</h4>
        {/* <input
          placeholder="Room ID"
          value={roomName}
          onChange={handleChange}
          className="border-[1px] border-black py-1 px-2 rounded"
        /> */}
        <button type="submit" className="py-1 px-2 rounded border-[1px] ml-2 border-black">
          Join the room
        </button>
      </form>
    </div>
  )
}

export default Home
