import { useState } from "react"
import GalleryCard from "./GalleryCard"
import { GalleryCardType } from "./GalleryCard";

 const staticImage: GalleryCardType = {
    title : "The Bedroom",
    artist: "Vincent van Gogh",
    location: "Saint-Rémy-de-Provence, 1889",
    image : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg",
    altText :  "Gustav Klimt painting"
}

function GalleryGrid() {
const [galleries, setGalleries] = useState<GalleryCardType[]>([]);
for (let i = 0; i<10; i++){
    galleries.push(staticImage)
}

    return (
      <>
      
        <h1>Overview</h1>
        <div className="grid-container">
        <ul><GalleryCard 
        title = {staticImage.title}
        image={staticImage.image}
        artist={staticImage.artist}
        location={staticImage.location}
        altText={staticImage.altText}/></ul>

   <ul> <GalleryCard 
        title = {staticImage.title}
        image={staticImage.image}
        artist={staticImage.artist}
        location={staticImage.location}
        altText={staticImage.altText}/></ul>

<ul> <GalleryCard 
        title = {staticImage.title}
        image={staticImage.image}
        artist={staticImage.artist}
        location={staticImage.location}
        altText={staticImage.altText}/></ul>

<ul> <GalleryCard 
        title = "This is much lomnger title on two lines possibly even longer"
        image={staticImage.image}
        artist={staticImage.artist}
        location={staticImage.location}
        altText={staticImage.altText}/></ul>


        </div>

        {console.log(galleries)}


      </>
    
    )
  }
  
  export default GalleryGrid