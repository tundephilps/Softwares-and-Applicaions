import React, { useState } from "react";
import "./App.scss";
import background from "../src/components/background.mp4";
import buttonclick from "../src/components/buttonclick.wav";

import buttonbreak from "../src/components/buttonclickrelease.wav";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import paradise from "../src/components/paradise.mp3";
import buttonrollover from "../src/components/buttonrollover.wav";
import { useRef } from "react";

function App() {
  //Declare state variable
  const [isMuted, setIsMuted] = useState(true);

  //Create function to toggle mute
  const toggleMute = () => setIsMuted(!isMuted);

  //create a ref to store the audio element
  const videoRef = useRef();
  const audioRef = useRef(null);
  const musicRef = useRef(null);

  const soundRef = useRef(null);
  const breakRef = useRef(null);
  const backgroundRef = useRef(null);
  //create a handler to play the music file
  const handlePlayMusic = () => {
    audioRef.current.play();
  };

  const handlePlaySound = () => {
    soundRef.current.play();
  };

  const playAudio = () => {
    musicRef.current.play();
  };

  const playBreak = () => {
    breakRef.current.play();
  };

  const Music = () => {
    backgroundRef.current.play();
  };

  return (
    <div className="screen">
      <i
        className="fas fa-2x"
        id="sound"
        onClick={toggleMute}
        onClickCapture={handlePlaySound}
      >
        {isMuted ? <GiSpeakerOff /> : <GiSpeaker />}
      </i>

      <video
        src={background}
        //type="video/mp4"
        ref={videoRef}
        autoPlay
        loop
        id="videoBackground"
        muted
      />
      {/*<audio ref={backgroundRef} src={paradise} muted={isMuted} />
       */}
      <audio ref={soundRef} src={paradise} muted={isMuted} />
      <audio ref={musicRef} src={buttonrollover} />
      <audio ref={audioRef} src={buttonclick} />
      <audio ref={breakRef} src={buttonbreak} />
      <div className="menu">
        <h1>Software and Applications </h1>
        <h3>Full Gallery</h3>
        <ul>
          <li>
            <a
              href="https://note-app-brown.vercel.app/"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              Note Pad
            </a>
          </li>

          <li>
            <a
              href="https://kanban-dnd-plum.vercel.app/"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              KABAN (Drag n Drop)
            </a>
          </li>

          <li>
            <a
              href="https://optimum-crypto.vercel.app/"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              Crypto Tracker App
            </a>
          </li>

          <li>
            <a
              href="https://music-player-gamma-blue.vercel.app/"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              Music Player App
            </a>
          </li>
          <li>
            <a
              href="https://ricky-gules.vercel.app/"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              Ricky and Morty App
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              GOOGLE CALENDAR CLONE (Coming Soon)
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              SLACK CLONE (Coming Soon)
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handlePlayMusic}
              onMouseEnter={playAudio}
              onMouseLeave={playBreak}
            >
              GOOGLE DRIVE CLONE (Coming Soon)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
