import React from 'react';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import NoMatchPage from './components/NoMatchPage/NoMatchPage';

import ProtectedRoute from './protectedRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Join}/>
            <ProtectedRoute path="/Chat" component={Chat}/>
            <Route path="*" component={NoMatchPage} />
        </Switch>
    </Router>
);

export default App;
