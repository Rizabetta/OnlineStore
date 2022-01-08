import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value }).then(data => {
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"введите название типа"}></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addType}>Добавить</Button>
                <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;