import React from "react";
import { useState } from "react";

function Toggler(props) {
  const [on, setOn] = useState(props.defaultOnValue);

  function toggle() {
    setOn((prevState) => !prevState);
  }

  return (
    <div>
    {props.render(on, toggle)}
    </div>
  )  
}

export default Toggler;
