import "./SecondContainer.css";
import ThankYouIcon from "../icon/ThankYou.png";
import { useState } from "react";

export default function SecondContainer(props) {
  return (
    <div className="secondContainer">
      <img src={ThankYouIcon} className="thankYou" />
      <div className="showSelectedBox">
        <p className="showSelectedText">You selected {props.result} out of 5</p>
      </div>
      <h1 className="ThankYouText">Thank you!</h1>
      <h3 className="thankYouLongText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </h3>
    </div>
  );
}
