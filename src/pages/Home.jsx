import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import { Grid, Typography } from '@material-ui/core';

import Testimonial from "../components/UI/Testimonial";



const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section" style={{ marginBottom: '200px' }}>
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title" style={{ color: '#FF8300' }}>Nos Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title" style={{ color: '#FF8300' }}>Nos Derniers Voitures</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      <Container className=" bg-black p-3 rounded text-center opacity-80">
        <Row  >
          <Col xs={3}>
            <h3 className="text-white"><strong>Clients: + {6}</strong></h3>
          </Col>
          <Col xs={3}>
            <h3 className="text-white"><strong>Voitures : +{20}</strong></h3>
          </Col>
          <Col xs={3}>
            <h3 className="text-white"><strong>branches : +{20}</strong></h3>
          </Col>
          <Col xs={3}>
            <h3 className="text-white"><strong>partenaires : +{20}</strong></h3>
          </Col>
        </Row>
      </Container>


      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle" style={{ color: '#000' }}>Points de Vue de nos clients</h6>
              <h2 className="section__title" style={{ color: '#FF8300' }}>Temoigne</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}

    </Helmet>
  );
};

export default Home;
