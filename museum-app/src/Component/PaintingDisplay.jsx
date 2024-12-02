import styles from "./PaintingDisplay.module.css";
function PaintingDisplay() {
    return (
        <>
        <div className= {styles.paintingDisplay}>
        <img src="https://lh3.googleusercontent.com/X7_CHCjksOZYu4gIGa45Edj1tMymdiz2o3pbL6HqqVEszWvPzrM6iIwHzaWNqgsWLcm7VmHCQyuQowWSSImQYLF8qW48zmZ-rx309F3c=s0" />
        <p className="nom peinture">River Landscape with Riders</p>
        <p className="peintre">Aelbert Cuyp</p>

        </div>
        </>
    )

}
export default PaintingDisplay
