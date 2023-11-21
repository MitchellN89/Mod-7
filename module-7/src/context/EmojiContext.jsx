import { useState, useContext } from "react";
import React from "react";

const EmojiContext = React.createContext();

export function EmojiProvider({ children }) {
  const [currentEmoji, setCurrentEmoji] = useState("😀");

  function handleCurrentEmoji() {
    console.log(currentEmoji);
    setCurrentEmoji(currentEmoji === "😀" ? "😢" : "😀");
  }

  return (
    <EmojiContext.Provider value={{ currentEmoji, handleCurrentEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmojiContext() {
  console.log(EmojiContext);
  return useContext(EmojiContext);
}
