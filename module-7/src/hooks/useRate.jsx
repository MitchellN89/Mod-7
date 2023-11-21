import { useState, useEffect, useReducer } from "react";
import { Typography } from "@mui/material";

function rateReducer(state, action) {
  switch (action.type) {
    case "set rate":
      return (
        // <p>
        <Typography variant="subtitle2">
          {action.currency}:{" "}
          {action.data.bitcoin[action.currency.toLowerCase()]}
        </Typography>
        // </p>
      );
    case "reset":
      return (
        // <p>
        <Typography variant="subtitle2">Loading...</Typography>
        // </p>;
      );
    case "error":
      return (
        // <p>
        <Typography variant="subtitle2">Network Error</Typography>
        //</p>
      );
  }
}

function useRate(currency) {
  //   const [rate, setRate] = useState(null); // this was used before implementing the useReducer
  const [rate, rateDispatch] = useReducer(rateReducer, null);

  useEffect(() => {
    // setRate(null); // I have set this to null each time a call is made so that if there is a delay in getting the data back, the DOM will read "Loading" for clarity purposes
    rateDispatch({ type: "reset" });
    let ignore = false;
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not receive data");
        }
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          console.log(data);
          rateDispatch({ type: "set rate", data, currency }); // This is really the only way I can think to set up the useReducer. You pass in "set rate" as the type, you also pass in the data and the currency and the reducer sets rate as the
          //   setRate(data.bitcoin[currency.toLowerCase()]); // commented this out and moved the logic to the useReducer
        }
      })
      .catch((err) => {
        rateDispatch({ type: "error" });
      });
    return () => {
      console.log("Cleanup in progress");
      ignore = true;
    };
  }, [currency]);

  return rate;
}

export default useRate;
