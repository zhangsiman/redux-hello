import React, { PropTypes } from 'react';
import Postbody from './Postbody';
import {Provider} from 'react-redux';
import store from './store';
import Header from './Header'

class Post extends React.Component {
  render () {
    return(
      <div>
        <Provider store={store}>
          <div className='box'>
            <Header/>
            {this.props.params.postsId}
            <Postbody/>
          </div>
        </Provider>
      </div>
    )
  }
}

export default Post;
