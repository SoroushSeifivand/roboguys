import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow5">
      <img alt="Inja ye akse" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
