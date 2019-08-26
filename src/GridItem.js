import React from "react";
import ItemDescription from "./ItemDescription";

const GridItem = props => {
    const { office } = props;
    return (
        <div className="card">
            {office.photo ? (
                <img
                    className="card-img-top rounded-circle"
                    src={office.photo}
                    alt="Card cap"
                />
            ) : (
                <div className="office-letter">{office.name[0]}</div>
            )}
            <div className="card-body">
                <h5 className="card-title">{office.name}</h5>
                <ItemDescription desc={office.description} desiredLength={90} />
            </div>
        </div>
    );
};

export default GridItem;
