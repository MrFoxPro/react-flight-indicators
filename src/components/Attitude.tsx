import * as React from "react";
import { constants, IInstrumentProps } from "../config";
import { FiBox, FiCircle, HorizonBack, HorizonBall, HorizonCircle, HorizonMechanics } from "../images";
export interface IAttitudeProps extends IInstrumentProps {
  roll: number;
  pitch: number;
}

const Attitude: React.FunctionComponent<IAttitudeProps> = props => {
  let pitch = props.pitch;
  if (pitch > constants.pitch_bound) pitch = constants.pitch_bound;
  else if (pitch < -constants.pitch_bound) pitch = -constants.pitch_bound;

  pitch *= 0.7;

  return (
    <span id="attitude">
      <div className="instrument attitude" style={{ height: "200px", width: "200px" }}>
        <img src={FiBox} className="background box" style={{ display: props.showBox ? "" : "none" }} />
        <div className="roll box" style={{ transform: `rotate(${props.roll}deg)` }}>
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
};
export default Attitude;
