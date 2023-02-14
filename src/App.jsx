import ShowDays from "./components/ShowDays";
import React, { useState } from "react";
import "./App.css";
import NumberDemo from "./components/NumberDemo";
import MyInput from "./components/MyInput";

function App() {
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    console.log("🚀 ~ file: App.jsx:11 ~ submitHandler ~ evt", evt.target);
    const {
      user: { value: userValue },
      phone: { value: phoneValue },
    } = evt.target;
    console.log(
      "🚀 ~ file: App.jsx:15 ~ submitHandler ~ phoneValue",
      phoneValue
    );
    console.log("🚀 ~ file: App.jsx:15 ~ submitHandler ~ userValue", userValue);
  }

  return (
    <form className="App" onSubmit={submitHandler}>
      {/* <NumberDemo /> */}
      {/* <ShowDays /> */}
      <MyInput
        inputName={"user"}
        label={"User:"}
        inputValue={username}
        setInputValue={setUserName}
      />
      <MyInput
        inputName={"phone"}
        label={"Phone:"}
        inputValue={phone}
        setInputValue={setPhone}
      />
      <button type="submit" className="button">
        SUBMIT
      </button>
    </form>
  );
}

export default App;
