import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { histor } from './store';

// Import css
import css from './styles/style.styl';

const router = ( 
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoGrid}></IndexRoute>
          <Route path="/view/:postId" component={Single}></Route>
        </Route>
      </Router>
    </Provider>
)

render (router, document.getElementById('root')); 