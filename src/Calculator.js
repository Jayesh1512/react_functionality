import React, { useState } from 'react'

function Calculator() {
    const [output ,setOutput] = useState(0)



  return (
    <div className='flex justify-center'>
    <div className='w-1/2 flex flex-col '>
      <p className='screen text-center'>{output}</p>
      <div className='button grid grid-cols-3'>
            <button onClick={()=>{setOutput('')}}> AC </button>
            <button onClick={()=>{setOutput(0)}}> CE </button>
            <button onClick={()=>{setOutput(output.slice(0 , -1))}}> DEL </button>
            <button onClick={()=>{setOutput(output+9)}}>9</button>
            <button onClick={()=>{setOutput(output+8)}}>8</button>
            <button onClick={()=>{setOutput(output+7)}}>7</button>
            <button onClick={()=>{setOutput(output+6)}}>6</button>
            <button onClick={()=>{setOutput(output+5)}}>5</button>
            <button onClick={()=>{setOutput(output+4)}}>4</button>
            <button onClick={()=>{setOutput(output+3)}}>3</button>
            <button onClick={()=>{setOutput(output+2)}}>2</button>
            <button onClick={()=>{setOutput(output+1)}}>1</button>

            <button onClick={()=>{setOutput(output+'-')}}> -</button>
            <button onClick={()=>{setOutput(output+'+')}}> + </button>  
            <button onClick={()=>{setOutput(eval(output))}}> =</button> 
      </div>  


    </div>
    </div>
  )
}

export default Calculator
