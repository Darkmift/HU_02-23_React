import React from "react";

function MyInput({ inputName, label, inputValue, setInputValue }) {
  const inputChangeHandler = (evt) => {
    // console.log(
    //   "🚀 ~ file: MyInput.jsx:6 ~ inputChangeHandler ~ evt",
    //   evt.target,
    //   evt.target.value
    // );

    setInputValue(evt.target.value);
  };

  return (
    <label>
      {label} &nbsp;
      <input
        type="text"
        name={inputName}
        id={inputName}
        value={inputValue}
        onInput={inputChangeHandler}
      />
    </label>
  );
}

export default MyInput;
