import * as React from "react";

import FiBox from "assets/img/fi_box.svg";
import FiCircle from "assets/img/fi_circle.svg";
import HorizonBack from "assets/img/horizon_back.svg";
import HorizonBall from "assets/img/horizon_ball.svg";
import HorizonCircle from "assets/img/horizon_circle.svg";
import HorizonMechanics from "assets/img/horizon_mechanics.svg";

import { constants } from "../config";
export interface IAttitudeProps {
  roll: number;
  pitch: number;
}

export default class Attitude extends React.Component<IAttitudeProps> {
  public render() {
    let pitch = this.props.pitch;
    if (pitch > constants.pitch_bound) pitch = constants.pitch_bound;
    else if (pitch < -constants.pitch_bound) pitch = -constants.pitch_bound;

    pitch *= 0.7;
    
    return (
      <span id="attitude">
        <div className="instrument attitude" style={{ height: "200px", width: "200px" }}>
          <img src={FiBox} className="background box" />
          <div className="roll box" style={{ transform: `rotate(${this.props.roll}deg)` }}>
            <img src={HorizonBack} className="box" />
            <div className="pitch box" style={{ top: `${pitch}%` }}>
              <img src={HorizonBall} className="box" />
            </div>
            <img src={HorizonCircle} className="box" />
          </div>
          <div className="mechanics box">
            <img src={HorizonMechanics} className="box" />
            <img src={FiCircle} className="box" />
          </div>
        </div>
      </span>
    );
  }
}
