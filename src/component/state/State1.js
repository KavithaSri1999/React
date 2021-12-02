import React from 'react';
class State1 extends React.Component{
    details= {
         sal:50000 
        };  
        state={name:"Kavitha",loc:"KLR"};
        handlename=()=>{
            this.setState({name:"Sana"});
        } ;
        handleimg=()=>{
            this.setState({Pic:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1m3j7SVrPODWEsW7pgzWQRIQLNU1JV9K-g&usqp=CAU"});
        };
        handleloc=()=>{
            this.setState({loc:"MLR"});
        };
    render(){
        return(
            <div>
                <h1>Name:{this.state.name}</h1>
                <h2>Loc:{this.state.loc}</h2>
                <h2>Salary:{this.details.sal}</h2>
                <button className="btn btn-primary" onClick={this.handlename}>Click</button>
                <button className="btn btn-danger" onClick={this.handleimg}>Click_to_change_img</button>
                <button className="btn btn-success" onClick={this.handleloc}>Click to change location</button>
            </div>
        )    }

}
export default State1;