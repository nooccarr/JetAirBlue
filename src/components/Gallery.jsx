import TopImageSection from './TopImageSection';
import { useState } from 'react';
import { Gallery as GridGallery } from 'react-grid-gallery';
import { Lightbox } from "react-modal-image";
import { IMAGES } from './Images';

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = IMAGES[index];

  const handleClick = (index, _) => setIndex(index);
  const handleClose = () => setIndex(-1);

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
            large={IMAGES[index].original}
            onClose={handleClose}
          />
        )}
      </div>
    </main>
  );
};

export default Gallery;