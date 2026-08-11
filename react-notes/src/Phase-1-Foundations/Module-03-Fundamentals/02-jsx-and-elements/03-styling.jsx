// 1.Inline Style object
// 2. Plain CSS File + ClassName
// 3. CSS Modules + Styles.Value

import "./style.css";
import styles from "./style.module.css";

function StylingComp() {
  return (
    <>
      {/* Inline Stye */}
      <div
        style={{
          height: "20vh",
          width: "20vh",
          backgroundColor: "orange",
          borderRadius: "10px",
          margin: "10px",
        }}
      ></div>

      {/* external styles */}
      <div className="box-styles"></div>

      {/* module style */}
      <div className={styles.boxStyles}></div>
    </>
  );
} 
export default StylingComp;
