import React, { Component } from 'react';
import Search from '../Search';
import ShowPreview from '../ShowPreview';
import ShowPage from '../ShowPage';
import { Switch, Route } from "react-router";

export class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Search} />
                    <Route path='/show/:id' component={ShowPage} />
                </Switch>
            </div>
        )
    }
}

export default AppRouter;
