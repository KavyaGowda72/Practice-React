import React from "react";

const ButtonComponent = () => {
  const handleClick = (e) => {
    e.target.style.border = "2px solid green";
  };
  const imgagePath =
    "https://m.media-amazon.com/images/I/31K5tBuI3ZL._MCnd_AC_.jpg";
  return (
    <img onClick={(e) => handleClick(e)} src={imgagePath} alt="profilepic" />
  );
};

export default ButtonComponent;
