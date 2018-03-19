import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import styles from './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <p>This is a nav bar</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;
