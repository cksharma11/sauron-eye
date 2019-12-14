import React from "react";

const Puhser = ({ pusher }) => {
  return (
    <div className="pusher">
      <h3>{pusher.name}</h3>
      <div>{`Errors ab tak ->  ${pusher.errorCount}`}</div>
    </div>
  );
};

export default Puhser;
