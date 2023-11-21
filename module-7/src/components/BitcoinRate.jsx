import { useState } from "react";

import useRate from "../hooks/useRate";
import { useEmojiContext } from "../context/EmojiContext";
import Emoji from "./Emoji";
import {
  FormLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const rate = useRate(currency);
  const { currentEmoji, handleCurrentEmoji } = useEmojiContext();

  // const [rate, setRate] = useState(null); // Was used in Exercise 1
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

  // Exercise 1 Below
  // useEffect(() => {
  //   setRate(null); // I have set this to null each time a call is made so that if there is a delay in getting the data back, the DOM will read "Loading" for clarity purposes
  //   let ignore = false;
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!ignore) {
  //         setRate(data.bitcoin[currency.toLowerCase()]);
  //       }
  //     });
  //   return () => {
  //     console.log("Cleanup in progress");
  //     ignore = true;
  //   };
  // }, [currency]);

  // const options = currencies.map((curr) => (
  //   <option value={curr} key={curr}>
  //     {curr}
  //   </option>
  // ));

  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <>
      {/* <h2>Bitcoin Exchange Rate</h2> */}
      <Typography variant="h2">Bitcoin Exchange Rate</Typography>
      <FormControl>
        <FormLabel htmlFor="currencySelect">Choose Currency: </FormLabel>
        <Select
          onChange={(e) => setCurrency(e.target.value)}
          id="currencySelect"
        >
          {options}
        </Select>
      </FormControl>
      {/* <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label> */}
      {/* {rate ? (
        <p>
          {currency} Rate: {rate}
        </p>
      ) : (
        <p>Loading...</p>
      )} */}
      {/* The above only works properly when using the useEffect in THIS component. I've simplified it using the reducer in useRate custom hook */}
      {rate}
      <Emoji></Emoji>
      {/* I've opted to do another component with the display and button for the emoji here*/}
    </>
  );
}

export default BitcoinRates;
