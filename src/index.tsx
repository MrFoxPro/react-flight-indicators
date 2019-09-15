import * as React from "react";
import { render } from "react-dom";

import "assets/css/flightindicators.css";
import Attitude from "./components/Attitude";
import Heading from "./components/Heading";

render(
  <div>
        <Attitude roll={50} pitch={10}/>
  </div>,
  document.getElementById("app")
);
