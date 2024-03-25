import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComponent" 
import HomepageComponent from "./Components/HomepageComponent";
import QuizpageComponent from "./Components/QuizpageComponent";

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomepageComponent />}/>
      <Route path="/quiz" element={<QuizpageComponent />} />
    </Routes>
    </div>
  );
}

export default App;
