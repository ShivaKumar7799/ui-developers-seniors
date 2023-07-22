import React, { useState } from "react";

function ShowHide({ item }) {
  const [showTech, setShowTech] = useState(false);
  return (
    <div>
      <h1>
        {item?.id} {item?.name}
      </h1>
      {showTech && (
        <div>
          <h3>Email : {item?.email}</h3>
          <h3>UserName : {item?.userName} </h3>
        </div>
      )}
      {showTech ? (
        <button onClick={() => setShowTech(false)}>showless</button>
      ) : (
        <button onClick={() => setShowTech(true)}>Showmore</button>
      )}
    </div>
  );
}

export default ShowHide;
