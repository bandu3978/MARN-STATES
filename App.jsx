import React from "react";
import Jotirlinga from "./JYOTIRLINGA/Jotirlinga";
import JSON from "./JYOTIRLINGA/jyotirlings.json"
import "./JYOTIRLINGA/globle.css"



const App=()=>
{
  return(
    <>
  <Jotirlinga data={JSON}/>

   </>
 
  )
}
export default App