import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <div className="d-flex"  >
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    bg={brand._id === device.selectedBrand._id ? 'secondary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;