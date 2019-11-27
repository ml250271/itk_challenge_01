import React from "react";
import styled from "styled-components";
import ItemDescription from "./ItemDescription";

const ListItemWrapper = styled.div`
  width: 95%;
  margin: 20px auto;
  border-bottom: 1px solid lightgray;
  padding-bottom: 8px;

  .cover-image {
    background-image: url(${props => props.photoUrl});
    background-size: cover;
    background-position: center;
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

const ListItem = ({ office }) => {
  return (
    <ListItemWrapper photoUrl={office.photo}>
      <div className="media">
        {office.photo ? (
          <div className="cover-image rounded-circle">&nbsp;</div>
        ) : (
          <div className="office-letter">{office.name[0]}</div>
        )}
        <div className="media-body">
          <h5 className="mt-0">{office.name}</h5>
          <ItemDescription desc={office.description} desiredLength={90} />
        </div>
      </div>
    </ListItemWrapper>
  );
};

export default ListItem;
