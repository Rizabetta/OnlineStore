import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const history = useHistory()

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + "/" + device._id)}>
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"} ></Card>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center" >
                <div>signature</div>
                <div className="d-flex align-items-center">
                    <div>{device.rating}</div>
                    <Image width={20} height={20} src={star} />
                </div>
            </div>
            <div>{device.name}</div>
        </Col>
    );
};

export default DeviceItem;