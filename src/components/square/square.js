import React from 'react';
import styles from "./square.module.css";

const Square = ({ isHighlighted, onMouseEnter, row, col }) => {
  // Alternate colors for rows and columns
  const isBlack = (row % 2 === 0 && col % 2 === 0) || (row % 2 !== 0 && col % 2 !== 0);
  
  const squareClasses = `${styles.square} ${isBlack ? styles.black : styles.white} ${isHighlighted ? styles.highlighted : ''}`;

  return <div className={squareClasses} onMouseEnter={() => onMouseEnter(row, col)} />;
};

export default Square;