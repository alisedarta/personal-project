import { useNavigate } from "react-router-dom";
import useFetchArtworks from "../useFetchArtworks";
import GalleryGrid from "./GalleryGrid";

function About() {
  const artworks = useFetchArtworks().slice(0, 4);
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <div className="terms-and-about">
        <p>
          This website is a virtual art gallery displaying art works from the
          Art Institute of Chicago API. As part of my frontend development
          learning journey, I've developed this project and enhanced my skills
          using TypeScript, React and CSS. Feel free to browse through!
        </p>
        <GalleryGrid artworks={artworks} />
        <button className="view-more-btn" onClick={() => navigate("/")}>
          View More Artworks
        </button>
      </div>
    </div>
  );
}

export default About;
