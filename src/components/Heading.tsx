import * as React from "react";

import FiBox from "assets/img/fi_box.svg";
import FiCircle from "assets/img/fi_circle.svg";
import HeadingYaw from "assets/img/heading_yaw.svg";
import HeadingMechanics from "assets/img/heading_mechanics.svg";
export interface IHeadingProps {
  attitude: number;
}

export default class Heading extends React.Component<IHeadingProps> {
  public render() {
    return (
      <span id="heading">
        <div className="instrument heading" style={{ height: "200px", width: "200px" }}>
          <img src={FiBox} className="background box" />
          <div className="heading box" style={{ transform: "rotate(-8384deg)" }}>
            <img src={HeadingYaw} className="box" />
          </div>
          <div className="mechanics box">
            <img src={HeadingMechanics} className="box" />
            <img src={FiCircle} className="box" />
          </div>
        </div>
      </span>
    );
  }
}
