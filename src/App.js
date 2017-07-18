import React from 'react';
import './App.css';
import Routes from './routes';
import {
  Link,
} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import persons from './components/reducer.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    route: routerReducer,
    persons,
  }),

  composeWithDevTools(
    applyMiddleware(
      ...middleware,
    ),
  ),
);

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <div>
          <div className="container">
            <nav className="navbar">
              <div id="navMenuExample" className="navbar-menu">
                <div className="navbar-start">
                      <Link className="navbar-item" to="/persons">
                    Persons
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          <Routes />
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
