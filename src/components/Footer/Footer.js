import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.container}>
    <Container>
      <Row>
        <Col xs={12}>
          <h6>This is a footer</h6>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
