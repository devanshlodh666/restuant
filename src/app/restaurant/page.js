"use client"
import { useState } from "react"
import ResturantSignUp from "../_component/resturantSignUp"
import ResturantLogin from "../_component/resturantLogin"
import Signup from "../_component/signup"
const app = () => {
  const [islogin, setislogin] = useState(true)
    return (
    <>
    <Signup/>
    {/* <div>resturant </div>
    {islogin?<ResturantLogin/>:<ResturantSignUp/>} 
    
    <button onClick={()=>setislogin(!islogin)}>{!islogin?"Already have Account ? Login":"Do not have accoutn ?,SignUp"}</button> */}
    </>
  )
}

export default app