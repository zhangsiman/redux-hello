import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Header from './Header';
import Postbody from './Postbody'


class App extends React.Component {
  render () {
    return(
      <div className='box'>
        <Header />
        <Postbody/>
      </div>
    )
  }
}

export default App;
