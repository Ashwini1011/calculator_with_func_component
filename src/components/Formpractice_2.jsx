import React from "react";
import { Component } from "react";

class Formpractice_2 extends Component
{
    state={
        name:'',
        email:'',
        password:'',
        msg:'',
        date:'',
        svalue:'',
    }

    handelChange = (e) =>
    {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }


    render()
    {
        const {name,email,password,msg,date,svalue}=this.state
        return( 
            <>
            <div className="form_layout">
            <form>
            <div className="form_name">
            <label>Name:</label>
            <input type="text" placeholder="Name" value={name} name="name" onChange={this.handelChange}/>
            </div>
    
            <div className="form_email">
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} name="email" onChange={this.handelChange}/>
            </div>
    
            <div className="form_password">
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} name="password" onChange={this.handelChange}/>
            </div>
              
            <div className="form_textarea">
            <label>Textarea:</label>
            <textarea type='text' placeholder="Write your msg here" value={msg} name="msg" onChange={this.handelChange}/>
            </div>
    
            <div className="form_date">
            <label>Date:</label>
            <input type="date" placeholder="Date" value={date} name="date" onChange={this.handelChange}/>
            </div>
            
            </form>

            <div className="collecting_text">
                <p>The name is <span>{name}</span></p>
                <p>The email is <span>{email}</span></p>
                <p>The password is <span>{password}</span></p>
                <p>The message is <span>{msg}</span></p>
                <p>The date is <span>{date}</span></p>
                
            </div>
            </div>
            </>
           
        )
    }
}


 export default Formpractice_2