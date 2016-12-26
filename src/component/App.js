import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Header from './Header'


class App extends React.Component {
  render () {
    return(
      <div className='box'>
        <Header />
      </div>
    )
  }
}

export default App;
