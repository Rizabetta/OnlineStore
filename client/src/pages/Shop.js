import React from 'react';
import TypeBar from '../components/TypeBar';
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';

const Shop = () => {
    return (
        <Container >
            <Row className="mt-2">
                <Col ml={3} >
                    <TypeBar></TypeBar>
                </Col>
                <Col ml={9} >
                    <BrandBar>
                    </BrandBar>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;