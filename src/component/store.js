import {createStore} from 'redux';
import rootReducer from './reducers'

let show=[
        'auther',
        'contet'
]

let posts=[
  {
    id:1,
    title:'redux-hello'
  },
  {
    id:2,
    title:'redux-comment'
  }
]


const defaultState={
  show,
  posts
}

let store=createStore(rootReducer,defaultState)
export default store


//[...state, action.comments] 是把state这个数组展开，然后再把新加如的数据添加进去，新添加进去的数据就是action.comments携带过来的
