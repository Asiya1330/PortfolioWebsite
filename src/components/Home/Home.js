import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { ProjectsProvider } from "../../Context/ProjectsContext";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sababa Usmani</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Clients />
      </Container>

      <Services />

      <Container >
        <ProjectsProvider>
          <ProjectsGrid></ProjectsGrid>
        </ProjectsProvider>
      </Container>

      <Container >
        <Reviews />
      </Container>

      <Container>
        <Contact />
      </Container>
     
    </section>
  );
}

export default Home;
