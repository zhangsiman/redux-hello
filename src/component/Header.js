import React, { PropTypes } from 'react';
import {Link} from 'react-router'

class Header extends React.Component {
  render () {
    return(
      <div className="Header">
          <Link to='/'>Home</Link>
          <Link to='/work'>Work</Link>
      </div>
    )

  }
}

export default Header;
