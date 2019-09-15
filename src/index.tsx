import * as React from "react";
import { render } from "react-dom";

import "assets/css/flightindicators.css";
import Attitude from "./components/Attitude";
import Heading from "./components/Heading";
import Variometer from "./components/Variometer";
import Altimeter from "./components/Altimeter";
import AirSpeed from "./components/Airspeed";


render(
  <div>
    <Attitude roll={50} pitch={10} />
    <Heading heading={45} />
    <Variometer verticalSpeed={2} />
    <Altimeter altitude={200} pressure={5} />
    <AirSpeed speed={150} />
  </div>,
  document.getElementById("app")
);
