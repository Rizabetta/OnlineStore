import React from 'react';
import TypeBar from '../components/TypeBar';
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
    return (
        <Container >
            <Row className="mt-2">
                <Col md={3} >
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9} >
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;