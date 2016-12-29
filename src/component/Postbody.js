import React, { PropTypes } from 'react';
import store from './store'

class Postbody extends React.Component {
  constructor(){
    super();
    this.state={
      show:store.getState().show//把数据引用过来
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var contentValue=this.refs.content.value;
    if(contentValue==''){
      alert('输入内容不能为空')
    }

    store.dispatch({
      type:'ADD_COMMENT',
      show:this.refs.content.value
    })

    this.refs.commentForm.reset();
    this.setState({show: store.getState().show});
  }

  render(){
    var content=this.state.show.map((item,index)=><sapn key={index} className='comment'>{item}</sapn>)
    return(
      <div className='postbody'>
        <div className='component'>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}　ref='commentForm'>
            {content}
            <input type='text' ref='content'/>
            <button className='speak'>评论</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Postbody;
