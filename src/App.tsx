import { Route, Routes } from "react-router-dom";
import GalleryGrid from "./components/GalleryGrid";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<GalleryGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
