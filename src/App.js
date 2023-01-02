import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😉": "Wink Face",
  "🥺": "Pleading Face",
  "😭": "Loudly crying face",
  "😊": "Smiling Face",
  "🪔": "Oil lamp",
  "❤️": "red heart",
  "✨": "Sparkle"
};

var emojisWeHave = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler() {
    var userInput = Event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our dictionary...";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3> Emojis in Dictionary</h3>
      {emojisWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      <footer className="footer">
        <div className="footer-columns">
          <h4 className="footer-heading">Emoji Interpreter</h4>
          <small className="small">Made with React js</small>
          <a
            className="footer-link"
            href="https://github.com/zeeshan-akhter/emoji-interpreter-app-neog-mark8"
          >
            Source code
          </a>
        </div>
        <div className="footer-columns">
          <h4 className="footer-heading">Made by</h4>
          <small className="small">
            Zeeshan Akhter
          </small>
          <a href="https://twitter.com/zeeshan__akhter">
            <i className="icon fab fa-twitter"></i>
            Twitter
          </a>
          <a href="https://github.com/zeeshan-akhter">
            <i className="icon fab fa-github"></i>
            Github
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-akhter-4b1766216/">
            <i className="icon fab fa-linkedin"></i>
            linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}
