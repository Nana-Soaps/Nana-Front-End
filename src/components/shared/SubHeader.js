import React from "react";

function SubHeader({ title, message }) {
  return (
    <div className="shopHeader py-5">
      <div className="container">
        <div className="content">
          <h1 className="mb-3">{title.toUpperCase()}</h1>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
