import React, { useContext, useEffect } from 'react';
import TypeBar from '../components/TypeBar';
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from "mobx-react-lite";
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Footer from "../components/Footer";
import Pages from '../components/Pages';

const Shop = observer(() => {
    const { device } = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType._id, device.selectedBrand._id, device.page, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Row >
            <Container >
                <Row className="mt-3">
                    <Col md={3} >
                        <TypeBar></TypeBar>
                    </Col>
                    <Col md={9} >
                        <BrandBar />
                        <DeviceList />
                        <Pages />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Row>
    );
})

export default Shop;