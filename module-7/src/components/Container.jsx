// import MyAppBar from "./MyAppBar";
// import NavBar from "./NavBar";

import { Link } from "@mui/material";

export default function Container({ children }) {
  return (
    <>
      {/* <NavBar></NavBar> */}
      {/* <MyAppBar></MyAppBar> */}
      <div className="container">
        {children}
        <Link m={2} href="/">
          Go Back Home
        </Link>
      </div>
    </>
  );
}
