import * as React from "react";

import { FiBox, FiCircle, FiNeedle, VerticalMechanics } from "../images";
import { constants, IInstrumentProps } from "../config";

interface IVariometerProps extends IInstrumentProps {
  verticalSpeed: number;
}

const Variometer: React.FunctionComponent<IVariometerProps> = props => {
  let vario = props.verticalSpeed;
  if (vario > constants.vario_bound) vario = constants.vario_bound;
  else if (vario < -constants.vario_bound) vario = -constants.vario_bound;
  vario = vario * 90;

  return (
    <span id="variometer">
      <div className="instrument vario" style={{ height: "200px", width: "200px" }}>
        <img src={FiBox} className="background box" style={{ display: props.showBox ? "" : "none" }} />
        <img src={VerticalMechanics} className="box" />
        <div className="vario box" style={{ transform: `rotate(${vario}deg)` }}>
          <img src={FiNeedle} className="box" />
        </div>
        <div className="mechanics box">
          <img src={FiCircle} className="box" />
        </div>
      </div>
    </span>
  );
};

export default Variometer;
