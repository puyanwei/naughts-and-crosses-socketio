import { Socket } from "socket.io-client"

function joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
  return new Promise((rs, rj) => {
    socket.emit("join_game", { roomId })
    socket.on("room_joined", () => rs(true))
    socket.on("room_join_error", ({ error }) => rj(error))
  })
}
