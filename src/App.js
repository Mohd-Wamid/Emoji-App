import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "🤩": "Star-Struck",
  "🙂": "Slightly Smiling Face",
  "😇": "Smiling Face with Hallo",
  "🥵": "Hot Face",
  "🥰": "Smiling Face with Hearts",
  "😔": "sad",
  "😗": "Kissing Face",
  "😂": "Face with Tears of Joy",
  "❤️": "love",
  "😃": "Grinning Face with Big Eyes",
  "😳": "disbelief",
  "😁": "Beaming Face with Smiling Eyes",
  "😲": "Astonished Face",
  "😑": "annoyance"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Emoji meaning present in our databse will show here.."
  );

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // setEmoji(userInput);
    var meaning = emojiDictionary[userInput];
    // key inside object
    // if(userInput in emojiDictionary)
    if (meaning === undefined) {
      meaning = "Oops! Something went wrong. Try a diiferent Emoji.";
    }
    // console.log(meaning)
    setMeaning(meaning);
  }

  //i will catch you if you will copy my code.😂😂
  // var [userInput, setUserInput] = useState("");

  // function inputChangehandler(event) {
  //   //console.log(event.target);
  //   console.log(event.target.value);
  //   setUserInput(event.target.value);
  // }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>❤️Emoji Interpreter❤️</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>click the following emojies to know there meaning.</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
