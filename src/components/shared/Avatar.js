import React from "react";

const Avatar = ({ office, renderStyle }) =>
  office.photo ? (
    <img
      className={renderStyle.imgClass + " rounded-circle"}
      src={office.photo}
      alt="Card cap"
    />
  ) : (
    <div className="office-letter">{office.name[0]}</div>
  );

export default Avatar;
