import React, { useState } from 'react';
import styles from './PaintingDisplay.module.css';
import PaintingPopup from './PaintingPopUp.jsx';

const PaintingDisplay = ({ image, title, artist, isPortrait, longTitle }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  console.log(longTitle);
  const openPopup = () => {

    setPopupOpen(true);

  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  if (popupOpen) {
    return (
      <div className={styles.popup}>
        <PaintingPopup image={image} longTitle={longTitle}  onClose={closePopup} />
      </div>
    );
  }

  return (
    <div

      className={`${styles.paintingDisplay} ${isPortrait ? styles.portrait : styles.landscape}`}
      onClick={openPopup}

    >
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{artist}</p>

    </div>
  );
};

export default PaintingDisplay;
