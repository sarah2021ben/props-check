import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  // Set default props
  Profile.defaultProps = {
    fullName: "please your name",
    bio: "please your bio",
    profession: "please your profession",
  };
  // Set  props types
  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };
  const divStyle = {
    color: "#555",
    textAlign: "center",
    border: "1px solid #000",
    padding: "40px",
    margin: "50px 100px",
  };

  return (
    <div style={divStyle}>
      {
        // image as children props
        props.children
      }
      <h2>{props.fullName}</h2>
      <p>{props.bio}</p>
      <h6>{props.profession}</h6>
      {props.handleName(` the name of the current user is : ${props.fullName}`)}
    </div>
  );
}

export default Profile;
