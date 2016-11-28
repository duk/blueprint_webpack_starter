
import { FocusStyleManager } from "@blueprintjs/core";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Sample } from "./components/Sample";

ReactDOM.render(
    <Sample />,
    document.getElementById("example")
);

FocusStyleManager.onlyShowFocusOnTabs();