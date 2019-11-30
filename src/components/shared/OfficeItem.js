import React from "react";
import PropTypes from "prop-types";
import ItemDescription from "./ItemDescription";
import Avatar from "./Avatar";

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

const OfficeItem = ({ office, layout }) => {
  const renderStyle = layout === "list" ? renderList : renderGrid;

  return (
    <div className={renderStyle.wrapperClass}>
      <Avatar office={office} imgClass={renderStyle.imgClass} />
      <div className={renderStyle.bodyClass}>
        <h5 className={renderStyle.titleClass}>{office.name}</h5>
        <ItemDescription desc={office.description} desiredLength={90} />
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
