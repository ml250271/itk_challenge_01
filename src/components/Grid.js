import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import OfficeItem from "../shared/OfficeItem";

const GridItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr;
  grid-gap: 12px;
  margin: 20px;
  padding: 20px;
  background: rgb(119, 201, 182);
  .card {
    min-height: 300px;
    padding-top: 20px;
  }
  .card {
    text-align: center;
  }
  .card-img-top {
    background-size: cover;
    background-position: center;
    height: 60px;
    width: 60px;
    border: 1px solid lightgray;
    margin: auto;
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
    margin: auto;
  }
  .card-title {
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = ({ offices }) => {
  const renderGrid = {
    wrapperClass: "card",
    imgClass: "card-img-top",
    bodyClass: "card-body",
    titleClass: "card-title"
  };
  return (
    <GridItemWrapper>
      {offices.map(office => {
        return (
          <OfficeItem
            key={office.id}
            office={office}
            renderStyle={renderGrid}
          />
        );
      })}
    </GridItemWrapper>
  );
};

Grid.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object)
};

// Do I need default prop offices: [] here, considering the default state of offices is []?
Grid.defaultProps = {
  offices: []
};
export default Grid;
