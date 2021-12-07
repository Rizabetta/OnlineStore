import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";

const DevicePage = () => {
    const device = { id: 1, name: '1', price: 2500, rating: 5, img: `https://c.wallhere.com/photos/a4/86/League_of_Legends_Senna_League_of_Legends_sword-1718457.jpg!d` }
    const description = [
        { id: 1, title: 'dghdk', description: "jkjk" },
        { id: 2, title: 'dghdk', description: "jkjk" },
        { id: 3, title: 'dghdk', description: "jkjk" }
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', color: 'white', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
                        <h3>{device.price} руб.</h3>
                        <Button>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column  m-2">
                <h2>Описание</h2>
                {description.map(info =>
                    <Row
                        key={info.id}>
                        {info.title}: {info.description}
                    </Row>)}
            </Row >

        </Container>
    );
}

export default DevicePage;