import React from "react";
import ListItem from "./ListItem";

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

// Missing propTypes
export default List;
