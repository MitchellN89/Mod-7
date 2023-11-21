import { Typography, Button } from "@mui/material";
import { useEmojiContext } from "../context/EmojiContext";

function Emoji() {
  const { currentEmoji, handleCurrentEmoji } = useEmojiContext();
  return (
    <>
      {/* <p style={{ fontSize: "12pt" }}>Mood is: {currentEmoji}</p> */}
      <Typography variant="body1">Mood is: {currentEmoji}</Typography>
      {/* <button onClick={handleCurrentEmoji}>Change Mood</button> */}
      <Button onClick={handleCurrentEmoji}>Change Mood</Button>
    </>
  );
}

export default Emoji;
