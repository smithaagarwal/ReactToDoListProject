import { useState } from "react";
function ToDoItem() {
    const [strikeThroughCSS, setStrikeThroughCSS] =  
        useState(false); 
    return(
        <>
        <div className="flex items-stretch">
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
    <input type="checkbox"  onClick={() =>  setStrikeThroughCSS((prev) => !prev)} 
      
      id="check" />
   
  </label>
  <p style={ 
                    { 
                        textDecoration: strikeThroughCSS ? 
                            "line-through" : "none"
                    }} className="mt-px font-light text-gray-700 cursor-pointer select-none" >
    Remember Me
  </p>
  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Delete</button>
  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
</div> 
        </>
    )
}

export default ToDoItem;