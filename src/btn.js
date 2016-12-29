import React, { PropTypes } from 'react';
import Add from './add'

class Btn extends React.Component {
  constructor(){
    super();
    this.state={
      add:0,
    }
  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      add:this.state.add +1,
    })
  }
  render () {
      return(
        <div>
            {this.state.add}
            <button onClick={this.handleClick.bind(this)}>加一</button>
            <Add num={this.state.add}/>
        </div>
      )
  }
}

export default Btn;
