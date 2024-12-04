import React, { useState } from 'react';
import styles from './PaintingDisplay.module.css';

const PaintingDisplay = ({ image, title, artist, isPortrait }) => {
  return (
    <div className={`${styles.paintingDisplay} ${isPortrait ? styles.portrait : styles.landscape}`}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default PaintingDisplay
