import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";

const DeviceItem = ({ device }) => {
    return (
        <Col md={3}>
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"} ></Card>
            <Image width={150} height={150} src={device.img} />
            <div>
                <div>signature</div>
                <div>
                    <div>{device.rating}</div>
                    <Image width={20} height={20} src={star} />
                </div>
            </div>

        </Col>
    );
};

export default DeviceItem;