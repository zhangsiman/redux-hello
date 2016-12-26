import React, { PropTypes } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Work from './component/Work';
import Content from './component/Content';
import Edit from './component/Edit';


class Routers extends React.Component {
  render () {
    return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/work' component={Work} />
            <Route path='/posts/:_id' component={Content}/>
            <Route path='/edit/:_id' component={Edit} />
        </Route>
      </Router>
    </div>
    )
  }
}

export default Routers;
