import React from 'react'
import { useReducer } from 'react'
import {useNavigate} from 'react-router-dom'


const initialvalue={
  title:"",
  text:""
}
function Create() {
let Navigate=useNavigate()

let reducer=(state,action)=>{
switch (action.type){
  case "title":
    return {...state,title:action.payload}
  case "text":
    return  {...state,text:action.payload}
    default :
    return state
}

}
   const [state,dispatch]= useReducer(reducer,initialvalue)

    let handlepost=()=>{
      fetch("http://localhost:3007/post", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(state)
      }).then(Navigate("/"))
    }

  return (
    <div>
        <form onSubmit={handlepost} >
        <input type="text" onChange={(event)=>{dispatch({type:"title",payload:event.target.value})}}/>
        <textarea onChange={(event)=>{dispatch({type:"text", payload:event.target.value})}} ></textarea>
        <button type="submit"> publish </button>
        </form>
    </div>
  )
}

export default Create
