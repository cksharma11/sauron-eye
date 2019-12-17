import React from "react";

const Loader = ({ message }) => {
  return (
    <div className="loader-wrapper">
      <p className="loader-message">{message}</p>
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
