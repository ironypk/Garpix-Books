import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {RouterNames, routes} from '../router';

export const AppRouter = () => {
    return (
        <Switch>
            {
                routes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )
            }
            <Redirect to={RouterNames.MAIN}/>
        </Switch>
    );
};