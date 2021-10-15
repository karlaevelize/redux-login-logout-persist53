const initialState = {
  profile: null,
  token: null
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case "USER/login": {
      // console.log("action", action.payload)
      return {
        ...state,
        profile: action.payload.user,
        token: action.payload.token
      }
    }
    case "USER/logout": {
      //just return initial state to logout
      return initialState
    }
    default: {
      return state;
    }
  }
}