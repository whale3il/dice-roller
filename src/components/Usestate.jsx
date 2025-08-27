import React from 'react'
import { useState } from 'react'

const Usestate = () => {

     const [num, setnum] = useState(0)
    const increase =()=>{
       
        setnum( num + 1 )
        console.log(num);
        
    }
    const decrease =()=>{
        setnum( num - 1 )
    }

    console.log(num);
    

    
  return (
    <>
        <div>Usestate</div>
        {/* <h2>count: {num}</h2> */}
        <button onClick={increase} className='btn btn-primary ms-5'  > women</button>
        <button onClick={decrease} className='btn btn-primary ms-5'  > women     </button>
    </>
  )
}

export default Usestate