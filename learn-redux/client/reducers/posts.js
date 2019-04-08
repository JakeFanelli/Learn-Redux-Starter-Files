//a reducer takes in 2 things

//the action (info about what happened)
//copy of current state

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
