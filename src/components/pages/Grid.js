import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import OfficeItem from "../shared/OfficeItem";
import { LayoutType } from "./../shared/OfficeItem";

const GridItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  margin: 20px;
  padding: 20px;
  background: rgb(119, 201, 182);

  .card {
    min-height: 300px;
    padding-top: 20px;
    text-align: center;
  }

  .card-body {
    width: 100%;
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
  return (
    <GridItemWrapper>
      {offices.map(office => {
        return (
          <OfficeItem
            key={office.id}
            office={office}
            layout={LayoutType.grid}
          />
        );
      })}
    </GridItemWrapper>
  );
};

Grid.propTypes = {
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

export default Grid;
