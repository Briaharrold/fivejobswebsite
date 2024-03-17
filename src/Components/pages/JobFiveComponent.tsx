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

const JobFiveComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center",fontSize: "4vw"}}>
            Discord
          </h1>
          <p className="pt-3 text-center padding-text"style={{ display: "flex", justifyContent: "center"}}>
          Working at Discord offers a unique and rewarding experience, centered around four core values: autonomy, mastery, purpose, and compassion. These principles create an environment where employees thrive, focusing on creativity, learning, meaningful work, and emotional support. Leadership at Discord adopts a bottoms-up approach, offering support and guidance to foster creativity and autonomy. Teams are kept small to ensure meaningful relationships and deep learning opportunities, emphasizing the importance of choosing impactful work.
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
        <h6 className="text-center ">Clear diversity, inclusion</h6>
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
        <Col> <h6 className="text-center ">Five months of paid family leave to all new parents with the option to use it all at once or throughout the child’s first year.</h6></Col>
       
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
        <Col> <h6 className="text-center ">Generous 401(k) matching with 50% match up to the IRS 402(g) limit (US; competitive non-US pension options internationally).</h6></Col>
       
        <Col>
        <h6 className="text-center ">All of our managers go through a leadership program, and we offer diverse trainings for everyone. No matter what your interests or skills are, there's a place on our platform for you to find and build belonging.</h6>
        </Col>
        
        </Row>

      
    </Container>
  );
};

export default JobFiveComponent;
