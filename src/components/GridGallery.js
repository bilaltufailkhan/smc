import React from "react";

import { IMAGES } from "../utils/gallery";

import { Container, Row, Col } from "react-bootstrap";

function GridGallery() {
  const [images, setImages] = React.useState([]);

  const setGridImages = () => {
    setImages(IMAGES);
  };

  React.useEffect(() => {
    setGridImages();
  }, []);

  return (
    <>
      <Container fluid className="gallery py-5">
        {/* <div className="gallery text-center">
          <Gallery
            className="text-center"
            images={images}
            enableLightbox={true}
            enableImageSelection={false}
          />
        </div> */}
        <Row
          data-masonry={{ percentPosition: true }}
          className="justify-content-center"
        >
          <Col xs={12} className="text-center">
            {images.map((img) => {
              return <img src={img.src} className="m-2" />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GridGallery;
