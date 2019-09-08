import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const List = props => {
    const { offices } = props;
    return (
        <>
            {offices.map(office => (
                <ListItem key={office.id} office={office} />
            ))}
        </>
    );
};

export default List;
