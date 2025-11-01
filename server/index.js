const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server();
const app = express();

app.use(bodyParsr.json());

const emailToScoketMapping = new Map();

io.on("connection", (scoket) => {
  socket.on("join-room", (data) => {
    console.log("User", emailId, "Joined Room", roomId);
    const { roomId, emailId } = data;
    emailToScoketMapping.set(emailId, scoket.id);
    scoket.join(roomId);
    scoket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});

app.listen(8000, () => console.log("Http server running at PORT 8000"));
io.listen(8001);
