import React, { useState } from 'react'

function Calculator() {
    const [output ,setOutput] = useState(0)



  return (
    <div className='flex justify-center mt-10'>
    <div className='w-1/2 flex flex-col gap-2 text-white text-xl'>
      <p className='screen text-center h-24 bg-slate-300 rounded-md text-black text-5xl flex items-center justify-center'>{output}</p>
      <div className='button 
                      grid 
                      grid-cols-3 
                      gap-3
                      '>
            
   
            
            
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput('')}}> AC </button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(0)}}> CE </button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output.slice(0 , -1))}}> DEL </button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+9)}}>9</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+8)}}>8</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+7)}}>7</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+6)}}>6</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+5)}}>5</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+4)}}>4</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+3)}}>3</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+2)}}>2</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+1)}}>1</button>

            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+'-')}}> -</button>
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(output+'+')}}> + </button>  
            <button className='h-16 bg-slate-600 rounded-md' onClick={()=>{setOutput(eval(output))}}> =</button> 
      </div>  


    </div>
    </div>
  )
}

export default Calculator
