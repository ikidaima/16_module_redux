const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT': return {
      ...state,
      [action.payload.id]: action.payload
    }
    case 'DELETE_COMMENT': 
      const newState = {...state};
      delete newState[action.payload];
      return newState;
    default: return state
  }
}

export default commentsReducer;