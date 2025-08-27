import React from 'react'
import { useState } from 'react'
import ludo1 from '../assets/ludo1.png.jpg'
import ludo2 from '../assets/ludo2.png.jpg'
import ludo3 from '../assets/ludo3.png.jpg'
import ludo4 from '../assets/ludo4.png.jpg'
import ludo5 from '../assets/ludo5.png.jpg'
import ludo6 from '../assets/ludo6.png.jpg'
import reac from '../assets/react.svg'


const Dice = () => {

    
    
    const [dice1, setdice1] = useState(0)
    const [dice2, setdice2] = useState(0)


    const ludoImg =[
        ludo1,
        ludo1 ,
        ludo2 ,  
        ludo3 ,
        ludo4 ,
        ludo5 ,
        ludo6 ,
    ]

    
    const rollDice = ()=>{
        
        // setdice1(Math.floor(Math.random() * ((ludoImg.length -1 )  -1 + 1) + 1))
        setdice1(Math.floor(Math.random() * ((ludoImg.length -1 )  -1 + 1) + 1))
        setdice2(Math.floor(Math.random() * ((ludoImg.length -1 )  -1 + 1) + 1))

        // console.log(dice1);
        
    }
    return (
        <>
            <h3 className='text-center mt-5  me-5'>    Ludo for Kids</h3>
    <div className='d-flex  col-4 mx-auto my-5 gap-0'>
        <div className='p-0 m-0' style={{}}>
                <img id='one' className='col-5' src={ludoImg[dice1]}  alt="" />-
        </div>
            <div>
                <img id='Two' className='col-5' src={ludoImg[dice2]}  alt="" />
            </div>
    </div>
    <div className='d-flex col-4 mx-auto gap-5'>
                <h3 className='ps-5 me-5' >{dice1}</h3>
                <h3 className=' me-5'  style={{paddingLeft:'80px'}}>{dice2}</h3>

    </div>

    <div className='col-2 mx-auto mt-3'>
            <button className='btn btn-success px-5 p-2  rounded-2' onClick={rollDice}>Roll</button>
    </div>
    </>
    )
}
export default Dice