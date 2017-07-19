import React from 'react';

import { Link } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';
import './App.css';
import requestMiddleware from './requestMiddleware';
import { reducer } from './components/persons/persons-actions';

const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const middleware = [requestMiddleware(), reduxRouterMiddleware];


const store = createStore(
  combineReducers({
    route: routerReducer,
    persons: reducer,
    form: formReducer,
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
        <div style={{margin: "10%"}}>
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
