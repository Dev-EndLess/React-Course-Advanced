import React from "react";

function InfoCallout(props) {
  return (
    <div className="callout">
      {props.children}
      {/* <h2>{props.header}</h2>
        <p>{props.body}</p> */}
    </div>
  );
}

export default InfoCallout;
