import React from "react";

const Stripes = () => {
  const stripes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="stripes">
      {stripes.map((s, id) => (
        <div key={id} className="stripe"></div>
      ))}
    </div>
  );
};

export default Stripes;
