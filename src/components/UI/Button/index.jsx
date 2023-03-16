import React from "react";
import PropTypes from "prop-types";

export class ClassButton extends React.Component {
  render() {
    const buttonStyle = {
      color: this.props.color,
      padding: " 10px 10px",

      fontWeight: 700,
      fontSize: 22,
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
    };
    return <button style={buttonStyle}>{this.props.text}</button>;
  }
}

export const PropsButton = (props) => {
  console.log({ props });

  const { text, color, backgroundColor: bgColor, children } = props;
  console.log({ text, color, bgColor });
  const buttonStyle = {
    color,
    padding: " 24px 24px",
    bgColor,
    fontWeight: 700,
    fontSize: 22,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
  };
  return <button style={buttonStyle}>{text || children}</button>;
};

PropsButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

PropsButton.defaultProps = {
  color: "black",
  bgColor: "red",
};

export default PropsButton;
