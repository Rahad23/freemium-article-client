import React, { useState, useEffect } from "react";
import Peer from "simple-peer";
import io from "socket.io-client";
import { Gravatar } from "react-gravatar";

const ENDPOINT = process.env.REACT_APP_API_URL;
const socket = io(ENDPOINT);

function VoiceCall() {
  const [peer, setPeer] = useState(null);
  const [stream, setStream] = useState(null);
  const [otherPeers, setOtherPeers] = useState([]);
  const [audioMuted, setAudioMuted] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // create a new peer connection to the server
    const peer = new Peer({
      initiator: true,
      trickle: false,
    });

    peer.on("signal", (data) => {
      socket.emit("signal", data);
    });

    peer.on("stream", (stream) => {
      setStream(stream);
    });

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        peer.addStream(stream);
        setStream(stream);
      })
      .catch((err) => console.error(err));

    socket.on("signal", (data) => {
      peer.signal(data);
    });

    socket.on("user joined", (userName) => {
      setOtherPeers([...otherPeers, userName]);
    });

    socket.on("user left", (userName) => {
      setOtherPeers(otherPeers.filter((peerName) => peerName !== userName));
    });

    setPeer(peer);

    return () => {
      peer.destroy();
    };
  }, []);

  function handleAudioToggle() {
    stream.getAudioTracks()[0].enabled = !audioMuted;
    setAudioMuted(!audioMuted);
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handleNameSubmit(e) {
    e.preventDefault();
    socket.emit("join", userName);
  }

  return (
    <div>
      <h1>Voice Call</h1>
      {!stream && (
        <form onSubmit={handleNameSubmit}>
          <label>
            Enter your name:
            <input type="text" value={userName} onChange={handleNameChange} />
          </label>
          <button type="submit">Join Call</button>
        </form>
      )}
      {stream && (
        <div>
          <div className="participants">
            <div className="participant self">
              <Gravatar email={socket.id} size={50} />
              <div>{userName}</div>
            </div>
            {otherPeers.map((peerName) => (
              <div className="participant" key={peerName}>
                <Gravatar email={peerName} size={50} />
                <div>{peerName}</div>
              </div>
            ))}
          </div>
          <audio src={URL.createObjectURL(stream)} autoPlay controls />
          <button onClick={handleAudioToggle}>
            {audioMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      )}
    </div>
  );
}

export default VoiceCall;
