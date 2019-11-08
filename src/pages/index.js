import React from "react";
import { render } from "react-dom";
import "../styles/Index.modules.scss";
import App from "../components/app/App";
import * as serviceWorker from "../utils/serviceWorker";

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
