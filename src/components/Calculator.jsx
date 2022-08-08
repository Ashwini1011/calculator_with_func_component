import React from 'react'
import { useState } from 'react'
const Calculator = ()=>
{
const[fNum,setfNum] = useState(0)
const[lNum,setlNum] = useState(0)
const[result,setResult]=useState(0)
const[subresult,setsubResult]=useState(0)
const[multiresult,setmultiResult]=useState(0)
const[divresult,setdivResult]=useState(0)

return(
    <>
    <input type="Number" placeholder="FirstNumber" value={fNum} name="name" onChange={(e)=>setfNum(e.target.value)}/>
    <input type="Number" placeholder="LastNumber" value={lNum} name='name' onChange={(e)=>setlNum(e.target.value)}/>
    <button onClick={()=>{
        setResult(Number(fNum)+Number(lNum))}}>Add</button>
    <button onClick={()=>{setsubResult(Number(fNum)-Number(lNum))}}>Substract</button>
    <button onClick={()=>{setmultiResult(Number(fNum)*Number(lNum))}}>Multiplication</button>
    <button onClick={()=>{setdivResult(Number(fNum)/Number(lNum))}}>Division</button>




    <div>
        <p>fNum  {fNum}</p>
        <p>lNum  {lNum}</p>
        <p>Addition  {result}</p>
        <p>Substraction  {subresult}</p>
        <p>Multiplication {multiresult}</p>
        <p>Division {divresult}</p>
    </div>
    </>
)


}

export default Calculator