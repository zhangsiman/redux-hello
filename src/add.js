import React, { PropTypes } from 'react'

class Add extends React.Component {

handleClick(e){
  console.log(this.props.num);
}
  render () {
    return(
      <div>
        son:
        <button onClick={this.handleClick.bind(this)}>add2</button>
      </div>
    )
  }
}

export default Add;
