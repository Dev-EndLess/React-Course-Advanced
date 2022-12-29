import React from "react";
import { useState } from "react";

// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

// Problema: La componente Favorite e Menu hanno implementate 2 Logiche molto simili.
// Per evitare di riscrivere la stessa logica su molteplici componenti,
// usiamo una Higher Order Component in modo da scriverla una volta per tutte le
// Components, e passimo la logica tramite props


function Toggler(props) {
  const [on, setOn] = useState(props.defaultOnValue);

  function toggle() {
    setOn((prevState) => !prevState);
  }

  const Component = props.component;
  return <Component on={on} toggle={toggle} {...props} />;
}

export function WithToggler(component, optionsObj) {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    );
  };
}
