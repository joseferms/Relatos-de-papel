
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ImUserTie } from "react-icons/im";
import '../styles/Header.css';
import PurchaseCar from "./PurchaseCar.jsx";

import { SiBookstack } from "react-icons/si";

function Header() {


    return (
            <Navbar expand="lg" className="navbar w-100" >
                <Container>
                    <Navbar.Brand as={Link} to="/main"><SiBookstack className="navbar__icon"/>  Relatos de Papel </Navbar.Brand>
                    <Form inline>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Search" className=" mr-sm-2 navbar__search-input "/>
                            </Col>
                            <Col  className="navbar__button">
                                <Button  className="navbar__button--search">Buscar</Button>
                            </Col>
                            <Col >
                                    <PurchaseCar/>
                            </Col>
                            <Col >
                                <Button  className="navbar__button--user"><ImUserTie  className="navbar__button-icon" /></Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </Navbar>
    );
}

export default Header;