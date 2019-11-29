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
    display: block;
    margin: 0 10px;
  }
`;

const List = ({ offices }) => {
  const renderList = {
    wrapperClass: "media",
    imgClass: "cover-image",
    bodyClass: "media-body",
    titleClass: "mt-0"
  };
  return (
    <>
      {offices.map(office => (
        <ListItemWrapper key={office.id}>
          <OfficeItem office={office} renderStyle={renderList} />
        </ListItemWrapper>
      ))}
    </>
  );
};

List.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object)
};

export default List;
