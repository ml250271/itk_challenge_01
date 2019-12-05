import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ office, imgClass }) => {
  office.photo ? (
    <img className={imgClass} src={office.photo} alt="Card cap" />
  ) : (
    <div className="office-letter">{office.name[0]}</div>
  );
};

Avatar.propTypes = {
  office: PropTypes.object.isRequired,
  imgClass: PropTypes.string.isRequired
};

export default Avatar;
