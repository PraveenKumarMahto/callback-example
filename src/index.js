import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import  BasicForm from './pages/basicform.js'

const CoreApp = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/student" component={BasicForm} />

            <Redirect from="/" to="/student" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<CoreApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
