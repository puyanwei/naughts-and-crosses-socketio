import type { NextPage } from "next"
import React, { useState } from "react"

const Home: NextPage = () => {
  const [roomName, setRoomName] = useState("")
  const [isJoining, setJoining] = useState(false)

  const handleRoomNameChange = (e: React.ChangeEvent<any>) => {
    const value = e.target.value
    setRoomName(value)
  }

  const joinRoom = async (e: React.FormEvent) => {
    e.preventDefault()

    // const socket = socketService.socket;
    // if (!roomName || roomName.trim() === "" || !socket) return;

    // setJoining(true);

    // const joined = await gameService
    //   .joinGameRoom(socket, roomName)
    //   .catch((err) => {
    //     alert(err);
    //   });

    // if (joined) setInRoom(true);

    // setJoining(false);
  }

  return (
    <div className="m-4">
      <form onSubmit={joinRoom} className="space-y-2">
        <h4>Enter Room ID to Join the Game</h4>
        <input
          placeholder="Room ID"
          value={roomName}
          onChange={handleRoomNameChange}
          className="border-[1px] border-black py-1 px-2 rounded"
        />
        <button
          type="submit"
          disabled={isJoining}
          className="py-1 px-2 rounded border-[1px] ml-2 border-black"
        >
          {isJoining ? "Joining..." : "Join"}
        </button>
      </form>
    </div>
  )
}

export default Home
