import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { EmojiProvider } from "../context/EmojiContext";
import BitcoinRates from "./BitcoinRate";

export default function AppRoutes(props) {
  return (
    <Routes>
      {/* I've opted to NOT use Outlet in this particular example as I can't see a good method of  */}
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login {...props}></Login>}></Route>
      <Route
        path="/bitcoin"
        element={
          <EmojiProvider>
            <BitcoinRates />
          </EmojiProvider>
        }
      ></Route>
    </Routes>
  );
}
