import { NavLink } from "react-router-dom";

import GalleryGrid from "./GalleryGrid";
import useFetchArtworks from "../hooks/useFetchArtworks";

function About() {
  const artworks = useFetchArtworks().slice(0, 4);

  return (
    <div className="container">
      <h1>About</h1>
      <div className="terms-and-about">
        <p>
          This website is a virtual art gallery displaying art works from the
          Art Institute of Chicago API. As part of my frontend development
          learning journey, I've developed this project and enhanced my skills
          using TypeScript, React and CSS. Feel free to browse through!
        </p>
        <GalleryGrid artworks={artworks} />
        <NavLink className="view-more-btn" to="/">
          View More Artworks
        </NavLink>
      </div>
    </div>
  );
}

export default About;
