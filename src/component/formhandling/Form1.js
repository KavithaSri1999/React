//Creating form & entering data & storing

import React, {Component} from 'react';

class Form1 extends Component{
    state={Email:"", Password:""};

    updateData=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submithandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }//To store data




    render(){
        return(
            <>
                <form onSubmit={this.submithandler}>
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email ID" onChange={this.updateData} name="Email"/><br/><br/>
                    <label>Password</label>
                    <input type="text" placeholder="Enter correct password" onChange={this.updateData} name="Password"/><br/><br/>
                    <input type="submit" placeholder="Login..."/><br/><br/>
                    <pre>{JSON.stringify(this.state)}</pre>
                </form>
            </>
        )
    }
}

export default Form1;