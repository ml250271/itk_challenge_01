import React from "react";
import ItemDescription from "./ItemDescription";
import Avatar from "./Avatar";

const OfficeItem = ({ office, renderStyle }) => {
  return (
    <div className={renderStyle.wrapperClass}>
      <Avatar office={office} renderStyle={renderStyle} />
      <div className={renderStyle.bodyClass}>
        <h5 className={renderStyle.titleClass}>{office.name}</h5>
        <ItemDescription desc={office.description} desiredLength={90} />
      </div>
    </div>
  );
};

export default OfficeItem;
