import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from "../../index";
import Modal from "react-bootstrap/Modal";

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить элемент
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className='mt-3 mb-2'>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-3 mb-2'>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder='введите название товара'
                />
                <Form.Control
                    className='mt-3'
                    placeholder='введите стоимость товара'
                    type='number'
                />
                <Form.Control
                    className='mt-3'
                    type='file'
                />
                <hr />
                <Button
                    //variant={"outline-dark"}
                    onClick={addInfo}
                >
                    Добавить новое свойство</Button>
                {
                    info.map(i =>
                        <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите название характеристики'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Введите описание характеристики'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                >Удалить</Button>
                            </Col>
                        </Row>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Добавить</Button>
                <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateDevice;