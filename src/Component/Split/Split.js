import React from 'react';
import html from '/IDC/cb/base-cb-fe/src/assest/image/html.jpg';
import css from '/IDC/cb/base-cb-fe/src/assest/image/css.jpg';
import react from '/IDC/cb/base-cb-fe/src/assest/image/react.jpg';
import js from '/IDC/cb/base-cb-fe/src/assest/image/javascript.jpg';
import node from '/IDC/cb/base-cb-fe/src/assest/image/node js.jpg';
import sql from '/IDC/cb/base-cb-fe/src/assest/image/sql.png';

const Gallery = () => {
  return (
    <div className="gallery ">
      <img src={html} alt="a hot air balloon" />
      <img src={css} alt="a clock" />
      <img src={react} alt="a sky photo of an old city" />
      <img src={js} alt="a small boat" />
      <img src={node} alt="a lonely man :(" />
      <img src={sql} alt="a forest" />
    </div>
  );
};

export default Gallery;
