function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

function postComments(state = [], action) {
  switch (action.type) {
    //return the new state with the new comment
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      console.log("REMOVING A COMMENT");
      //we need to return the new state without the deleted comment
      return [
        //from the start to the one we want to delete
        ...state.slice(0, action.i),
        //after the deleted on until the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

export default comments;
