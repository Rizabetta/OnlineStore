import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVidible, setBrandVisible] = useState(false)
    const [typeVidible, setTypeVisible] = useState(false)
    const [deviceVidible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}>
                Добавить бренд
            </Button>
            <Button className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}>
                Добавить элемент
            </Button>
            <CreateBrand show={brandVidible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVidible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVidible} onHide={() => setTypeVisible(false)} />

        </Container>
    );
}

export default Admin;