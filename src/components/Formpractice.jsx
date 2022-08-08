import React from "react";
import { Component } from "react";

class Formpractice extends Component
{
    state={
        name:'',
        email:'',
        password:'',
        msg:'',
        gender:'',
        date:'',
        range:'',
        svalue:'',
    }

    handelChange = (e) =>
    {
        this.setState(
            {
                name:e.target.value
            }
        )
    }

    handelChangeEmail = (e) =>
    {
        this.setState(
            {
                email:e.target.value
            }
        )
    }

    handelChangePass = (e) =>
    {
        this.setState(
            {
                password:e.target.value
            }
        )
    }

    handelChangeMsg = (e) =>
    {
        this.setState(
            {
                msg:e.target.value
            }
        )
    }

    handelChangeGender = (e) =>
    {
        this.setState(
            {
                gender:e.target.value
            }
        )
    }

    handelChangeRange = (e) =>
    {
        this.setState(
            {
                range:e.target.value
            }
        )
    }

    handelChangeSelect = (e) =>
    {
        this.setState(
            {
                svalue:e.target.value
            }
        )
    }

    handelChangeDate = (e) =>
    {
        this.setState(
            {
                date:e.target.value
            }
        )
    }



    render()
    {
        return( 
            <div className="form_layout">
            <form>
            <div className="form_name">
            <label>Name:</label>
            <input type="text" placeholder="Name" onChange={this.handelChange}/>
            </div>
    
            <div className="form_email">
            <label>Email:</label>
            <input type="email" placeholder="Email" onChange={this.handelChangeEmail}/>
            </div>
    
            <div className="form_password">
            <label>Password:</label>
            <input type="password" placeholder="Password" onChange={this.handelChangePass}/>
            </div>
              
            <div className="form_textarea">
            <label>Textarea:</label>
            <textarea type='text' placeholder="Write your msg here" onChange={this.handelChangeMsg}/>
            </div>
    
            <div className="form_date">
            <label>Date:</label>
            <input type="date" placeholder="Date" onChange={this.handelChangeDate}/>
            </div>
            
            <div className="form_radio">
            <label>Radio:</label>
            <input type='radio' onChange={this.handelChangeGender}/>
            </div>
    
            <div className="form_range">
            <label>Range:</label>
            <input type="range" onChange={this.handelChangeRange}/>
            </div>
    
            <div className="form_select">
            <label>Select:</label>
            <select onChange={this.handelChangeSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            </select>
            </div>
            </form>

            <div className="collecting_text">
                <p>The name is <span>{this.state.name}</span></p>
                <p>The email is <span>{this.state.email}</span></p>
                <p>The password is <span>{this.state.password}</span></p>
                <p>The message is <span>{this.state.msg}</span></p>
                <p>The date is <span>{this.state.date}</span></p>
                <p>The radio is <span>{this.state.gender}</span></p>  
                <p>The range is <span>{this.state.range}</span></p>
                <p>The selected value is <span>{this.state.svalue}</span></p>


                
            </div>
            </div>
           
           
        )
    }
}


 export default Formpractice