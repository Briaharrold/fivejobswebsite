import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Baby from '../assets/baby.png';
import Home from '../assets/Home.png';
import Heart from '../assets/heart.png';
import Piggy from '../assets/piggy.png';
import Location from '../assets/location.png';
import stats from '../assets/stats.png';
import Money from '../assets/Money.png';
import Building from '../assets/building.png';
import Stethoscope from '../assets/Stethoscope.png';

const JobTwoComponent = () => {
  return (
    <Container>
    <Row>
    <Col className="pt-5">
      <h1 style={{ display: "flex", justifyContent: "center",fontSize: "4vw" }}>
        FashionNova
      </h1>

      <p className="pt-3 padding-text text-center">
      Becoming a freelance software engineer will give me the flexibility and the unique ability to create my projects to support my educational goals, particularly in teaching kids to code with ASL integration. This will allow me schedule my work around my teaching commitments and focus on creating an inclusive coding curriculum. It also exposes me to various technologies and projects, enhancing my skill set, which I will then pass on to my students. Additionally, networking opportunities will be essential for growing my business by connecting with like-minded educators, organizations, and communities interested in accessible coding education.
      </p>
      <h3 className="pt-3  text-center">
      <Link
              to="https://www.fashionnova.com/pages/careers"
              target="_blank"
            >
              Click Here
              
            </Link>
           </h3>
      <h3
      className="pt-3"
      style={{ display: "flex", justifyContent: "center", color:'rgb(28, 0, 103'}}
    >
     Benefits:
    </h3>
    </Col>
    </Row>
    <Row style={{ display: "flex", justifyContent: "center" }}>
    <Col style={{ display: "flex", justifyContent: "center" }}>
    <ul >
      <li>
      <h4 className="padding-text">Formalized Career Paths</h4>
      </li>
        <li>
        <h4 className="padding-text">Fashion Nova Cares Program </h4>
        </li>
        <li>
        <h4 className="padding-text">Creative Development Internship Program</h4>
        </li>
        <li>
        <h4 className="padding-text">Employee Managment</h4>
        </li>
        <li>
        <h4 className="padding-text">Medical, Dental and Vision Coverage</h4>
        </li>
        <li>
        <h4 className="padding-text">Stocked kitchens with gratis snacks and drinks</h4>
        </li>
        <li>
        <h4 className="padding-text">Weekly Catered lunches</h4>
        </li>
        <li>
        <h4 className="padding-text">Flexible Paid Time Off (PTO)</h4>
        </li>
    </ul>
    </Col>
    </Row>
    <Row>
      <Col>
      
      
      </Col>
</Row>
 

</Container>
      
  );
};

export default JobTwoComponent;
