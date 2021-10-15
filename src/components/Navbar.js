import { useSelector } from "react-redux"
import { selectToken } from "../store/user/selectors"

export default function Navbar(){

  // getting the token
  const token = useSelector(selectToken)

  return(
    <div>
     {/* basic example of rendering based on token */}
     {/* you can also show "Welcome, user!" */}
      {token 
        ? <button>logout</button> 
        : <button>login</button>}
    </div>
  )
}