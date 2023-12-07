import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ src, alt, style }) => {
  return (
    <LazyLoad>
      <img src={src} alt={alt} style={style} />
    </LazyLoad>
  );
};

export default LazyImage;
