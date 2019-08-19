import React from "react";

const GridItem = props => {
    const { office } = props;
    return (
        <div className="card">
            {office.photo ? (
                <img
                    className="card-img-top rounded-circle"
                    src={office.photo}
                    alt="Card image cap"
                />
            ) : (
                <div className="office-letter">{office.name[0]}</div>
            )}
            <div className="card-body">
                <h5 className="card-title">{office.name}</h5>
                <p className="card-text">{office.description}</p>
            </div>
        </div>
    );
};

export default GridItem;
