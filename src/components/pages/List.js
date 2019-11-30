import React from "react";
import styled from "styled-components";
import OfficeItem from "../shared/OfficeItem";
import { PropTypes } from "prop-types";

const ListItemWrapper = styled.div`
  width: 95%;
  margin: 40px auto;
  border-bottom: 1px solid lightgray;
  padding-bottom: 8px;

  .cover-image {
    height: 60px;
    width: 60px;
    border: 1px solid lightgray;
    margin: 0 10px;
  }
  .office-letter {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 2.3rem;
    background-color: lightgray;
    font-weight: bold;
    border-radius: 100%;
    margin: 0 10px;
  }
`;

const List = ({ offices }) => {
  return (
    <>
      {offices.map(office => (
        <ListItemWrapper key={office.id}>
          <OfficeItem office={office} layout={"list"} />
        </ListItemWrapper>
      ))}
    </>
  );
};

List.propTypes = {
  offices: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string
    })
  ).isRequired
};

List.defaultProps = {
  offices: []
};

export default List;
