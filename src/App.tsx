import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TermsAndConditions from "./components/TermsAndConditions";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
