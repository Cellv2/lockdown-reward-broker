import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Admin, AddFunds, PageNotFound, Rewards } from "../pages";

type Props = {};

const RouterSwitch = (props: Props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/addfunds" exact component={AddFunds} />
            <Route path="/rewards" exact component={Rewards} />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default RouterSwitch;
