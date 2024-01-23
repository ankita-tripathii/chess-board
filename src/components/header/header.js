import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import styles from "./header.module.css";

const Header = () => {
   
    return (
            <Container>
            <Row sticky="top">
            <Col lg={12}>
              <h2 className={styles.heading}>Create a chess board which highlights the squares being attacked by a bishop.</h2>
            </Col>
            </Row>
            </Container>
       
    )
}

export default Header
