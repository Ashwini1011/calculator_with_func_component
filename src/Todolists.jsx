import React from 'react'
import { useState } from "react";
import { Button, Container, Input, Row } from "reactstrap";

const Todolists = (props)=>{
    return(
        <>
        <div className='todo'>
        <li>{props.text}</li>
        <button onClick={()=>{
            props.onSelect(props.id)
        }}>Delete</button>
        </div>
        </>
    )
}

export default Todolists