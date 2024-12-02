import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css";
function ImageContainer() {
    return (
        <>
        <div className={styles.imageContainer}>
        <PaintingDisplay />
        <PaintingDisplay />
        <PaintingDisplay />
        </div>

        </>

    );
}
export default ImageContainer
