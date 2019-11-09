import React from "react";
import { render } from "react-dom";
import Layout from "./components/Layout/Layout";
import * as serviceWorker from "./utils/serviceWorker";

render(<Layout />, document.getElementById("root"));

serviceWorker.unregister();
