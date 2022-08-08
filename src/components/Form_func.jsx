import React,{useState} from 'react'

const form_func = () => {
const [fname,fsetName]=useState('');
const [lname,lsetName]=useState('');
const [counter,setCounter]=useState(0)
 
  return (
    <>
    <div className="form_layout">
    <form>

    <div className="form_name">
    <label>fName:</label>
    <input type="text" placeholder="Name" value={fname} name="name" onChange={(e)=>fsetName(e.target.value)}/>
    </div>

    <div className="form_name">
    <label>lName:</label>
    <input type="text" placeholder="Name" value={lname} name="name" onChange={(e)=>lsetName(e.target.value)} />
    </div>

    <button onClick={(e)=>{e.preventDefault()
      setCounter(counter+1)}}
      >Click me</button>

    </form>
    <p>Fname:{fname}</p>
    <p>Lname:{lname}</p>
    <p>Counter:{counter}</p>
    </div>
    </>
  )
}

export default form_func