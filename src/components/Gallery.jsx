import TopImageSection from './TopImageSection';
import { useState } from 'react';
import { Gallery as GridGallery } from 'react-grid-gallery';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css";
import { IMAGES } from './Images';


const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = IMAGES[index];
  const nextIndex = (index + 1) % IMAGES.length;
  const nextImage = IMAGES[nextIndex] || currentImage;
  const prevIndex = (index + IMAGES.length - 1) % IMAGES.length;
  const prevImage = IMAGES[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <main className='page-container'>
      <TopImageSection title='Gallery' />
      <div className='gallery-container'>
        <GridGallery
          images={IMAGES}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={450}
          tagStyle={{ color: 'white', fontSize: '12px', padding: '2.4px 7.2px 3.6px', backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </main>
  );
};

export default Gallery;