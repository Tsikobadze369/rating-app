import "./MainComponants.css";
import Logo from "../icon/Path.png";
import RateContainer from "../RateContainer/RateContainer";
import React, { useState } from "react";

export default function MainComponants(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="Container">
      <div className="LogoDiv">
        <img src={Logo} className="Logo" />
      </div>
      <h1 className="headerText">How Did we do?</h1>
      <h3 className="secondText">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>
      <RateContainer
        submited={props.submited}
        rate={props.rate}
        numbers={numbers}
        selectedKey={props.selectedKey}
      />
    </div>
  );
}
