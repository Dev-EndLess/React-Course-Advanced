import React from "react";

function ImageCallout(props) {
  return (
    <div className="callout">
      {props.children}
      {/* <img src={props.img} width="100%" />
        <figcaption>{props.caption}</figcaption> */}
    </div>
  );
}

export default ImageCallout;
