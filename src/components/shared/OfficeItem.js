import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import styled from "styled-components";

const renderGrid = {
  wrapperClass: "card",
  imgClass: "card-img-top rounded-circle",
  bodyClass: "card-body",
  titleClass: "card-title"
};

const renderList = {
  wrapperClass: "media",
  imgClass: "cover-image rounded-circle",
  bodyClass: "media-body",
  titleClass: "mt-0"
};

const layoutTypes = {
  grid: "grid",
  list: "list"
};

const Truncate = styled.div`
  p {
    width: ${props => (props.layout === layoutTypes.list ? "85vw" : "93%")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const OfficeItem = ({ office, layout }) => {
  const renderStyle = layout === layoutTypes.list ? renderList : renderGrid;

  const { wrapperClass, imgClass, bodyClass, titleClass } = renderStyle;
  const { name, description } = office;
  return (
    <div className={wrapperClass}>
      <Avatar office={office} imgClass={imgClass} />
      <div className={bodyClass}>
        <h5 className={titleClass}>{name}</h5>
        <Truncate layout={layout}>
          <p className="card-text">{description}</p>
        </Truncate>
      </div>
    </div>
  );
};

OfficeItem.propTypes = {
  office: PropTypes.object.isRequired,
  layout: PropTypes.oneOf([layoutTypes.list, layoutTypes.grid]).isRequired
};

export default OfficeItem;
