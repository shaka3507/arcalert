"use client";

import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import CrisisChecklist from "./check-list";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [crisis, setCrisis] = useState("");
  const nodeRef = useRef(null);  // Use useRef for node reference

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setCrisis(inputValue);
    }
  };

  return (
    <>
      {!crisis && (
        <div className="max-w-md mx-auto my-8 p-4 border shadow-md flex items-center">
          <input
            type="text"
            placeholder="tornado..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow border-none outline-none text-lg px-6"
          />

          <span
            className="ml-4 cursor-pointer hover:text-blue-700"
            onClick={() => setCrisis(inputValue)}
          >
            ➔
          </span>
        </div>
      )}
      {crisis && <CrisisChecklist event={crisis} />}
    </>
  );
};

export default Chat;