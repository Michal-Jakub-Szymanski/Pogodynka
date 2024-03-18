import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComponent" 
import HomepageComponent from "./Components/HomepageComponent";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/homepage" component={HomepageComponent}/>
    </Routes>
    </>
  );
}

export default App;
