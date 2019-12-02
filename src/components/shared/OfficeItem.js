import React from "react";
import PropTypes from "prop-types";
import ItemDescription from "./ItemDescription";
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

const Truncate = styled.div`
  p {
    width: ${props => (props.layout === "list" ? "85vw" : "93%")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const OfficeItem = ({ office, layout }) => {
  const renderStyle = layout === "list" ? renderList : renderGrid;

  const { wrapperClass, imgClass, bodyClass, titleClass } = renderStyle;
  const { name, description } = office;
  console.log("l:" + layout);
  return (
    <div className={wrapperClass}>
      <Avatar office={office} imgClass={imgClass} />
      <div className={bodyClass}>
        <h5 className={titleClass}>{name}</h5>
        <Truncate layout={layout}>
          <p className="card-text">{description}</p>
        </Truncate>
        {/* <ItemDescription desc={description} desiredLength={90} /> */}
      </div>
    </div>
  );
};

Avatar.propTypes = {
  office: PropTypes.object,
  layout: PropTypes.string
};

Avatar.defaultProps = {
  office: {},
  layout: ""
};

export default OfficeItem;
