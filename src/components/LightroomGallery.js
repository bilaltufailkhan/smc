import React from "react";
import { IMAGES } from "../utils/gallery";
import Lightroom from "react-lightbox-gallery";

function LightroomGallery() {
  const [images, setImages] = React.useState([]);

  const setGridImages = () => {
    setImages(IMAGES);
  };

  React.useEffect(() => {
    setGridImages();
  }, []);
  var settings = {
    columnCount: {
      default: 5,
      mobile: 3,
      tab: 4,
    },
    mode: "dark",
  };

  return (
    <div>
      <Lightroom images={images} settings={settings} />
    </div>
  );
}

export default LightroomGallery;
