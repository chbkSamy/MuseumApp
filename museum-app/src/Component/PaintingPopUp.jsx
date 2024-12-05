import React from 'react';
import styles from './PaintingPopup.module.css';

const PaintingPopup = ({ image, title, artist, onClose }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <img src={image} alt={title} className={styles.popupImage} />
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default PaintingPopup;
