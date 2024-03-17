import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobOneComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center",fontSize: "4vw" }}>
            Freelancing
          </h1>
   
          <p className="pt-3 padding-text text-center">
          Becoming a freelance software engineer will give me the flexibility and the unique ability to create my projects to support my educational goals, particularly in teaching kids to code with ASL integration. This will allow me schedule my work around my teaching commitments and focus on creating an inclusive coding curriculum. It also exposes me to various technologies and projects, enhancing my skill set, which I will then pass on to my students. Additionally, networking opportunities will be essential for growing my business by connecting with like-minded educators, organizations, and communities interested in accessible coding education.
          </p>
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
          <h4 className="padding-text">Generational wealth</h4>
          </li>
          <li>
          <h4 className="padding-text">Entrepreneurship Skills</h4>
            </li>
            <li>
            <h4 className="padding-text">Identifying market needs and creating solutions</h4>
            </li>
            <li>
            <h4 className="padding-text">Adaptability</h4>
            </li>
            <li>
            <h4 className="padding-text">Personal Growth</h4>
            </li>
        </ul>
        </Col>
        </Row>
    
    </Container>
  );
};

export default JobOneComponent;
