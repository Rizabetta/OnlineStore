import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item action variant="light"
                    style={{ cursor: 'pointer' }}
                    active={type._id === device.selectedType._id}
                    onClick={() => device.setSelectedType(type)}
                // key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;