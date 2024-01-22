import React, { useState } from 'react';
import Square from '../square/square';
import styles from "./chessboard.module.css";

const Chessboard = () => {
  const [highlightedSquares, setHighlightedSquares] = useState([]);

  const handleSquareHover = (row, col) => {
    const newHighlightedSquares = calculateHighlightedSquares(row, col);
    setHighlightedSquares(newHighlightedSquares);
  };

  const calculateHighlightedSquares = (row, col) => {
    const highlightedSquares = [];
    // Bishop attacks along diagonals
    for (let i = 0; i < 8; i++) {
      highlightedSquares.push({ row: i, col: col + (i - row) });
      highlightedSquares.push({ row: i, col: col - (i - row) });
    }
    return highlightedSquares.filter(
      (square) => square.row >= 0 && square.row < 8 && square.col >= 0 && square.col < 8
    );
  };

  return (
    <div className={styles.chessboard}>
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <Square
            key={`${row}-${col}`}
            isHighlighted={highlightedSquares.some(
              (square) => square.row === row && square.col === col
            )}
            onMouseEnter={() => handleSquareHover(row, col)}
          />
        ))
      )}
    </div>
  );
};

export default Chessboard;
