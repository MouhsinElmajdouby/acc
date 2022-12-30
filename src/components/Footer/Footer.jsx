import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import LOGO from '../../assets//all-images//transparentvb.png';
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/home",
    display: "Acceuil",
  },
  {
    path: "/about",
    display: "A propos",
  },
  {
    path: "/cars",
    display: "Voitures",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1 style={{
                border: 'none',
                backgroundColor: 'transparent'
              }}>
                <Link to="/home" className=" d-flex align-items-center gap-2"  >
                  <img src={LOGO} width='200px' style={{ borderRadius: '10px' }} />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title" style={{ color: '#000' }}>liens des pages</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4" style={{ color: '#000' }}>localisation du bureau</h5>
              <p className="office__info">ENSA FES, route Imouzar</p>
              <p className="office__info">Telephone : 0707743554</p>

              <p className="office__info">Email: ensafes@gmail.com</p>

              <p className="office__info">Emploi du temps : 08:00 -- 18:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title" style={{ color: '#000' }}>Newsletter</h5>
              <p className="section__description" style={{ color: '#000' }}>Subscribe our newsletter</p>
              <div className="newsletter" style={{ backgroundColor: '#fff', color: '#000' }} >
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12" >
            <div className="footer__bottom" >
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4" style={{ color: '#000' }}>
                <i class="ri-copyright-line"></i>Copyright {year}, developee par
                ElMajdouby Bougaraani Boufnichel Benkady
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer >
  );
};

export default Footer;
