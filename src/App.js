import "./styles.css";
import { useState } from "react";
const musicdb = {
  English: [
    {
      name: "Tee-Shirt",
      artist: "Birdy",
      link: "https://www.youtube.com/watch?v=oM60hSMqIkI",
    },
    {
      name: "Photograph",
      artist: "Ed Sheeran",
      link: "https://www.youtube.com/watch?v=nSDgHBxUbVQ",
    },
    {
      name: "Little Things",
      artist: "One direction",
      link: "https://www.youtube.com/watch?v=xGPeNN9S0Fg",
    },
  ],
  Bengali: [
    {
      name: "Bhindeshi Tara",
      artist: "Chandrabindu",
      link: "https://www.youtube.com/watch?v=TjgkKuVo7Ww",
    },
    {
      name: "Preme Pora Baron",
      artist: "Lagnajita Chakraborty",
      link: "https://www.youtube.com/watch?v=1DAgBjXj96k",
    },
    {
      name: "Behaya",
      artist: "Lagnajita Chakraborty",
      link: "https://www.youtube.com/watch?v=huJGx_nfMxs",
    },
  ],
  Hindi: [
    {
      name: "Aaj Kal Zindagi",
      artist: "Wake up Sid",
      link: "https://www.youtube.com/watch?v=KWA0_kI5PKk",
    },
    {
      name: "Bhage re Mann",
      artist: "Sunidhi Chauhan",
      link: "https://www.youtube.com/watch?v=pkV4VbjIcCo",
    },
    {
      name: "Saiyyan",
      artist: "Kailash Kher",
      link: "https://www.youtube.com/watch?v=TuUVVKVdZm4",
    },
  ],
};
var music = Object.keys(musicdb);
export default function App() {
  var [lang, setlang] = useState("English");

  function clickhandler(lang) {
    setlang(lang);
  }

  return (
    <div className="App">
      <h2 style={{ color: "#0ea5e9" }}>What would you like to hear today?</h2>

      <div>
        {music.map((lang) => (
          <button
            onClick={() => clickhandler(lang)}
            style={{
              cursor: "pointer",
              background: "#0ea5e9",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid #0ea5e9",
              margin: "1rem 0.3rem",
            }}
          >
            <strong>{lang}</strong>
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {musicdb[lang].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid white",
                width: "90%",
                backgroundColor: "white",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}>
                {" "}
                {song.name}
                <a class="link" href={song.link}>
                  Watch the video
                </a>{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
