import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import News from "./News";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Nyc from "./Nyc";
import Stevejobs from "./Stevejobs";
import Adobe from "./Adobe";
import "./index.css";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/nyc" component={Nyc} />
            <Route path="/stevejobs" component={Stevejobs} />
            <Route path="/adobe" component={Adobe} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);

ReactDOM.render(
    <News />,
    document.getElementById("ajax-data")
);

