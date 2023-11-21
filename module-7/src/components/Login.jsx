import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      {/* <h2>Login Page</h2> */}
      <Typography variant="h2">Login Page</Typography>
      {/* <form action="">
        <label>
          UserName:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      </form> */}

      <form>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input aria-describedby="my-helper-text" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input aria-describedby="my-helper-text" type="password" />
          <FormHelperText id="my-helper-text">
            Never share your password
          </FormHelperText>
        </FormControl>

        <Button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          Login
        </Button>
      </form>
    </>
  );
}
