import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css";
import data from "../infosMockAPI.json";

function ImageContainer({ currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  const paintings = data.artObjects.slice(startIndex, endIndex).map((item, index) => {
    return (
      <PaintingDisplay
        key={startIndex + index}
        image={item.webImage.url}
        title={item.title}
        artist={item.principalOrFirstMaker}
        isPortrait={item.webImage.width < item.webImage.height}
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
