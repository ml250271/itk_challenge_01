import React from "react";
import PropTypes from "prop-types";

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

Avatar.propTypes = {
  office: PropTypes.object,
  renderStyle: PropTypes.object
};

export default Avatar;
