import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css";

function ImageContainer({ data, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paintings = data.slice(startIndex, endIndex).map((item, index) => {
    return (
      <PaintingDisplay
        key={startIndex + index}
        image={item.webImage?.url || ""}
        title={item.title || "Untitled"}
        artist={item.principalOrFirstMaker || "Unknown Artist"}
        isPortrait={item.webImage?.width < item.webImage?.height}
      />
    );
  });

  return (
    <div className={styles.imageContainer}>{paintings}</div>
  );
}

export default ImageContainer;
