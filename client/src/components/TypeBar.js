import React, { useContext } from 'react';
import ListGroup from "react-bootstrap/ListGroup"
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup variant="flush" style={{ width: window.innerHeight / 4 }}>
            {device.types.map(type =>
                <ListGroup.Item
                    action variant="secondary"
                    style={{ cursor: "pointer" }}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup>
    );
})

export default TypeBar;