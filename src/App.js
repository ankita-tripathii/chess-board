import React from 'react'
import './App.css';
import Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack';
import Chessboard from "./components/chessboard/chessboard";
import Header from "./components/header/header";



function App() {
  return (
    <>
    <Stack gap={2}>
       <Header />   
       <Chessboard />      
    </Stack>
    </>
  );
}

export default App;
