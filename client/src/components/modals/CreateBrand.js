import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { createBrand } from "../../http/deviceAPI";
import { useState } from 'react';

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({ name: value }).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"введите название бренда"}></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addBrand}>Добавить</Button>
                <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;