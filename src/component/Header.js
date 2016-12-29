import React, { PropTypes } from 'react';
import store from './store';
import {connect} from "react-redux";

class Header extends React.Component {
  handleClick(e){
    e.preventDefault();
    console.log(this.props.show);
  }
  render () {
    return(
      <div className="Header">
          <div className='card'>
            <span className='num' onClick={this.handleClick.bind(this)}>{this.props.show.length}</span>
          </div>

      </div>
    )

  }
}

const mapStateToProps=(state)=>({show:state.show})
export default connect(mapStateToProps)(Header);
