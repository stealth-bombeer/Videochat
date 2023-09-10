import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(roomCode);
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>Enter Room Code</label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
    </div>
  );
};
export default Home;
