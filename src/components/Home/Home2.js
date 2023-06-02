import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Greetings,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a Computer Information and Systems Engineer. I am currently pursuing MSc
              in Artificial Intelligence Engineering from Germany and I have been operating as a
              full-time freelancer for, the past seven years. I have a network of developers
              working alongside me. We usually build products for startups, businesses, NGOs,
              academic institutions, the medical industry, and other industries.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sigma4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons  flex justify-center items-center"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sigma4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons flex justify-center items-center"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sigma4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons flex justify-center items-center"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sigma4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons flex justify-center items-center"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
