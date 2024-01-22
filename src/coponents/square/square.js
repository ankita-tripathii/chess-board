import React from 'react';
import styles from "./square.module.css";

const Square = ({ isHighlighted, onMouseEnter }) => {
  const squareStyle = {
    backgroundColor: isHighlighted ? 'darkblue' : 'lightblue',
  };

  return <div className={styles.square} style={squareStyle} onMouseEnter={onMouseEnter} />;
};

export default Square;