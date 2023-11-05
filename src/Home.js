import './Home.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Photocard from './components/Photocard';
import {Container, Row, Col, Stack, Form, Card, Nav, } from 'react-bootstrap';

function Home() {
  return (
    <div className="Home">
              <div className="header">
          <Row>
            <Col><div className="logo"><h3>Austin Melendez</h3></div></Col>
            <Col>
              <Navbar />
            </Col>
          </Row>
      </div>
      <div className="content">
          <Row> 
          <Col>
            <Splash />
          </Col>
          <Col>
            <Photocard />
          </Col>
          </Row>
      </div>
    </div>
  );
}

export default Home;
