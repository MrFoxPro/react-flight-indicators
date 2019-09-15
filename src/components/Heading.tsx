import * as React from "react";
import { FiBox, FiCircle, HeadingYaw, HeadingMechanics } from "../images";
import { IInstrumentProps } from "../config";
interface IHeadingProps extends IInstrumentProps {
  heading: number;
}

const Heading: React.FunctionComponent<IHeadingProps> = props => {
  return (
    <span id="heading">
      <div className="instrument heading" style={{ height: "200px", width: "200px" }}>
        <img src={FiBox} className="background box" style={{ display: props.showBox ? "" : "none" }}/>
        <div className="heading box" style={{ transform: `rotate(-${props.heading}deg)` }}>
          <img src={HeadingYaw} className="box" />
        </div>
        <div className="mechanics box">
          <img src={HeadingMechanics} className="box" />
          <img src={FiCircle} className="box" />
        </div>
      </div>
    </span>
  );
};
export default Heading;
