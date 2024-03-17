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


const JobFourComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="pt-5">
          <h1 style={{ display: "flex", justifyContent: "center",fontSize: "4vw"}}>
             GitHub
          </h1>
          <p className="pt-3 text-center padding-text"style={{ display: "flex", justifyContent: "center"}}>
          Working at GitHub is highly regarded due to its innovative environment, particularly for developers. GitHub provides unique tools like Codespaces, which simplifies development by offering cloud-based environments accessible from any browser, eliminating the need for complex local setups. This feature enhances flexibility, saves hardware resources, and streamlines collaboration and project management.
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
        <h6 className="text-center ">Employee stock purchase plan that lets you purchase Microsoft stock at a discount. (Microsoft is our parent company.)</h6>
        </Col>
        
        </Row>

      
    </Container>
  );
};

export default JobFourComponent;
