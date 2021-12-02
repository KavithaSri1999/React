import React, { Component } from 'react'

 class Form extends Component {
     state={Email:"", Password:""}

     updateProp=(event)=>{
        this.setState({[event.target.name]:event.target.value})
     }

     submitHanlder = (event)=>{
        event.preventDefault();
        console.log(this.state)
     }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHanlder}>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your mail ID" onChange={this.updateProp} name="Email"/><br/><br/>
                    <label>Password</label>
                    <input type="text" placeholder="Enter your Password" onChange={this.updateProp} name="Password"/><br/><br/>
                    <input type="submit" value="Login..."/>
                    <hr/>
                    </form>       
                    <pre>{JSON.stringify(this.state)}</pre>         
            </div>
        )
    }
}

 export default Form