import React from 'react'
import { useState } from "react";
import { Button, Container, Input, Row } from "reactstrap";
import Todolists from './Todolists';


const Todo = ()=>{
    const [inputList,setInputList]=useState('')
    const [Items,setItems]=useState([])


    const itemEvent=(e)=>
    {
        setInputList(e.target.value)
    }


    const listOfItems =()=>
    {
        setItems((oldItems)=>{
            return[...oldItems,inputList]   
        })
        setInputList('')
    }

     const deleteItems = (id) =>{
        console.log('deleted')
        setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id
        })
    })
    }

    return(
        <>
           <Container>
        <Row>
          <label>Title</label>
          <Input
            placeholder="Enter title"
            value={inputList}
            onChange={itemEvent}
            
          />
        </Row>
        <Row>
          <Button onClick={listOfItems}>Add to list</Button>
        </Row>

        <p>My Todo's List</p>
        <ol>
            {Items.map((itemval,index)=>{
            return <Todolists key={index} id={index} text={itemval} onSelect={deleteItems}/>
            })}
        </ol>
      </Container>
        </>
    )
}

export default Todo