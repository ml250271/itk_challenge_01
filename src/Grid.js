import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

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

const Grid = props => {
  const { offices } = props;
  return (
    <GridItemWrapper>
      {offices.map(office => {
        return <GridItem key={office.id} office={office} />;
      })}
    </GridItemWrapper>
  );
};

export default Grid;
