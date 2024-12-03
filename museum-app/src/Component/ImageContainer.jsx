import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css";
import data from "../infosMockAPI.json";

function ImageContainer() {
  const paintings = data.artObjects.map((item, index) => {
    return (
      <PaintingDisplay
        key={index}
        image={item.webImage.url}
        title={item.title}
        artist={item.principalOrFirstMaker}
      />
    );
  });
  return (
    <>
      <div className={styles.imageContainer}>{paintings}</div>
    </>
  );
}
export default ImageContainer;
