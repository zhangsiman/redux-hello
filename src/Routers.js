import React, { PropTypes } from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Post from './component/Post'

class Routers extends React.Component {
  render () {
    return(
      <div>
          <Router history={browserHistory}>
              <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='/posts/:postsId' component={Post}/>
              </Route>
          </Router>
      </div>
    )

  }
}

export default Routers;
