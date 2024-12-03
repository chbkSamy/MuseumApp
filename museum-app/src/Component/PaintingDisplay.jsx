import React, { useState, useEffect } from 'react';
import styles from './PaintingDisplay.module.css'; 

const PaintingDisplay = ({ image, title, artist }) => {
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setOrientation(img.width > img.height ? 'landscape' : 'portrait');
    };
  }, [image]);

  return (
    <div className={`${styles.painting} ${styles[orientation]}`}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default PaintingDisplay
