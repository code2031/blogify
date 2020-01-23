import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';


import Header from './components/Header';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
 
class App extends React.Component {
    render() {
        return (
            <Provider store = { store }>
            <Router>
                <div>
                    <Header />
                    <Route exact path = '/' component= { Home } />
                    <Route exact path = '/join' component= { JoinUs } />
                </div>
            <Switch>
            </Switch>
            </Router>
            </Provider>
        );
    }
}
reactDom.render(<App />, document.getElementById('app'));