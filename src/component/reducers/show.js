function showReducer(state = [], action) {
  // console.log(state, action);
  switch (action.type) {
    case 'ADD_COMMENT':
      // console.log([...state, action.comment])
      return [...state, action.show]
    default:
      return state;
  }
}

export default showReducer
