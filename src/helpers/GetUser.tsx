import { useFethUserQuery } from "../Redux/RTQ/Auto"
import { useDispatch } from "react-redux"
import { addUser } from "../Redux/Slice/Auth"
import { IBody } from "../Common/types/Auth/Autorisation..types"

const useFetchUser=()=>{
  const token=sessionStorage.getItem("token")
    const {data }=useFethUserQuery(null,{skip:!token})
const dispatch = useDispatch()
const fetchUser=  ()=>{
   debugger
    let token  =  data?.token
        if(token){
          sessionStorage.setItem("token",JSON.stringify(token)) 
      dispatch(addUser(data))
        }
}
return[fetchUser,data]
}
export default useFetchUser