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

const JobThreeComponent = () => {
  return (
    <Container>
    <Row>
      <Col className="pt-5">
        <h1 style={{ display: "flex", justifyContent: "center",fontSize: "4vw"}}>
           Open AI
        </h1>
        <p className="pt-3 text-center padding-text"style={{ display: "flex", justifyContent: "center"}}>
        OpenAI emphasizes a strong commitment to diversity, equity, and inclusion (DEI) in its mission to develop artificial intelligence that benefits all of humanity. This commitment is reflected in a wide range of initiatives and is supported by the company's leadership. OpenAI also focuses on technical work aimed at understanding and mitigating harmful biases in AI systems, alongside supporting relevant conferences and groups within the AI community
        </p>
        <h3
          className="pt-3"
          style={{ display: "flex", justifyContent: "center", color:'rgb(28, 0, 103'}}
        >
         Benefits:
        </h3>
      </Col>

    </Row>
    <Row className="pt-4" style={{ display: "flex", justifyContent: "center" }}>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img  src={Location} alt={"location"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={Money} alt={"Money"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col >
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={Building} alt={"building"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>

    </Row>

    <Row className="pt-4">
      

      <Col>
      <h6 className="text-center ">Flexible time away to support balance in your work and life.</h6>
      </Col>
      <Col> <h6 className="text-center ">Competitive salaries.</h6></Col>
     
      <Col>
      <h6 className="text-center ">Clear diversity, inclusion Team-driven celebrations and events Daily breakfast, lunch, and dinnerFreshly baked cookies</h6>
      </Col>
      
      </Row>

      <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img  src={Stethoscope} alt={"location"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={Baby} alt={"Money"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col >
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={Home} alt={"building"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>

    </Row>

    <Row className="pt-4">
      

      <Col>
      <h6 className="text-center ">100% of medical, dental, and vision insurance premiums covered by GitHub for you + your dependents.</h6>
      </Col>
      <Col> <h6 className="text-center ">20 weeks of paid family leave to all new parents with the option to use it all at once or throughout the child’s first year.</h6></Col>
     
      <Col>
      <h6 className="text-center ">Family forming benefits that cover fertility, infertility, adoption, and surrogacy costs and support.</h6>
      </Col>
      
      </Row>
      

      <Row className="pt-4" style={{ display: "flex", justifyContent: "center" }}>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img  src={Heart} alt={"location"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={Piggy} alt={"Money"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col >
      <Col style={{ display: "flex", justifyContent: "center" }}> 
      <img src={stats} alt={"building"} className=" rounded" style={{ display: "flex", justifyContent: "center" }} />
      </Col>

    </Row>

    <Row>
      

      <Col>
      <h6 className="text-center ">Mental health benefits that offer resources and support and cover therapy and coaching sessions for you and your dependents.</h6>
      </Col>
      <Col> <h6 className="text-center ">Generous 401(k) matching .</h6></Col>
     
      <Col>
      <h6 className="text-center ">Annual learning & development stipend Employee resource groups</h6>
      </Col>
      
      </Row>

    
  </Container>
  );
};

export default JobThreeComponent;
