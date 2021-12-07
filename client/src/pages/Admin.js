import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button className="mt-4 p-2">
                Добавить тип
            </Button>
            <Button className="mt-4 p-2">
                Добавить бренд
            </Button>
            <Button className="mt-4 p-2">
                Добавить устройство
            </Button>
        </Container>
    );
}

export default Admin;