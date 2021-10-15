import axios from "axios"

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

export const loginSuccess = (data) => {
  return {
    type: "USER/login",
    payload: data
  }
}

export const logoutSuccess = () => {
  return {
    type: "USER/logout"
  }
}

export function logout(dispatch, getState){
  //to logout, remove the item from localStorage
  //otherwise you just stay logged in
  localStorage.removeItem("token")
  
  dispatch(logoutSuccess())
}

export function login(email, password){
  return async function thunk (dispatch, getState){

    const response = await axios.post(`${API_URL}/login`, {
      email, password
    })

    // console.log("login response", response.data.jwt)
    const token = response.data.jwt

    //here we put the item in local storage
    //a space in the browser we can save some (small) data
    //we can only save strings ()
    localStorage.setItem("token", token)

    const userResponse = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}`}
    })

    // console.log("user profile", userResponse)
    const user = userResponse.data

    dispatch(loginSuccess({token, user}))
  }
}

export async function persistUserInfoAfterRefresh(dispatch, getState){

  //get the token from localStorage
  const token = localStorage.getItem("token")
  
  if (!token) return

  //if we get token, request to "/me"
  const userResponse = await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}`}
  })

  const user = userResponse.data

  //dispatch it again
  dispatch(loginSuccess({token, user}))

}

