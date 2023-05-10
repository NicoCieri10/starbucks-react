import React from 'react';
import '../css/gallery.css';
import gallery1 from '../image/gallery-1.png';
import gallery2 from '../image/gallery-2.png';
import gallery3 from '../image/gallery-3.png';


const Gallery = () => {
  return (
    <section className="gallery">
      <img className="gallery__img" src={gallery1} alt="gallery-1.png" />
      <img className="gallery__img" src={gallery2} alt="gallery-2.png" />
      <img className="gallery__img" src={gallery3} alt="gallery-3.png" />
    </section>
  )
}

export default Gallery