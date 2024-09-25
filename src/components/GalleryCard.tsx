
export type GalleryCardType = {
    title: string;
    artist: string;
    location: string;
    image: string;
    altText: string;
    //once the api is called not optional
    imageApi?: string;
    iiifValue?: number;
    imageId?: string;

};

function GalleryCard (
   { title,
    artist,
    location,
    image,
    altText} : {
        title: string
        artist: string
        location: string
        image: string
        altText: string
    }
) {
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createImageURL = (iiifValue: number, imageId: string) => {
    const url = `https://www.artic.edu/iiif/${iiifValue}/${imageId}/full/843,/0/default.jpg`
    return url

}

    return (
        
        <div className="card">
        <img alt={altText} src={image} className = "art-image"></img>
        <div className="card-info">
            <div className="card-all-text">
            <div className="title-and-artist">
            <h3 className="card-title">{title}</h3>
            <p className="artist-name">{artist}</p>
            </div>
            <p className="card-location">{location}</p>
        </div>
        </div>
      </div>

    )
  }
  
  export default GalleryCard