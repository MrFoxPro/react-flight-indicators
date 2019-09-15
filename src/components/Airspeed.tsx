import * as React from "react";

import { FiBox, SpeedMechanics, FiNeedle, FiCircle } from "../images";
import { constants, IInstrumentProps } from "../config";
interface IAirSpeedProps extends IInstrumentProps {
  speed: number;
}

const AirSpeed: React.FunctionComponent<IAirSpeedProps> = props => {
  let speed = props.speed;
  if (speed > constants.airspeed_bound_h) speed = constants.airspeed_bound_h;
  else if (speed < constants.airspeed_bound_l) speed = constants.airspeed_bound_l;
  speed = 90 + speed * 2;

  return (
    <span id="airspeed">
      <div className="instrument airspeed" style={{ height: "200px", width: "200px" }}>
        <img src={FiBox} className="background box" style={{ display: props.showBox ? "" : "none" }} />
        <img src={SpeedMechanics} className="box" />
        <div className="speed box" style={{ transform: `rotate(${speed}deg)` }}>
          <img src={FiNeedle} className="box" />
        </div>
        <div className="mechanics box">
          <img src={FiCircle} className="box" />
        </div>
      </div>
    </span>
  );
};

export default AirSpeed;
