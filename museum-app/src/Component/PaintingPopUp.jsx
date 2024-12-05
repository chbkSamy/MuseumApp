import React from 'react';
import styles from './PaintingPopup.module.css';

const PaintingPopup = ({ image, longTitle, onClose }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <img src={image}  className={styles.popupImage} />

        <h3>{longTitle}</h3>
        {/* <p>{artist}</p> */}
      </div>
    </div>
  );
};

export default PaintingPopup;
