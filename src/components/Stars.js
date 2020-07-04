import React from "react";

const Stars = () => {
  const stars = [];
  for (let i = 0; i < 9; i++) {
    if (i % 2 === 0 || i === 0) {
      stars[i] = [1, 2, 3, 4, 5, 6];
    } else {
      stars[i] = [1, 2, 3, 4, 5];
    }
  }
  console.log(stars);
  return (
    <div className="stars">
      {stars.map((s, id) => (
        <div key={id} className="row">
          {s.map((star, idx) => (
            <div key={idx} className="star">
              ★
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Stars;
