// import "./App.css";
import "./stylesheets/mycss.css";

import AppRoutes from "./components/AppRoutes";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import AppBar from "./components/AppBar";

function App() {
  return (
    <>
      <Container>
        {/* <NavBar></NavBar> */}
        <AppBar></AppBar>

        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
