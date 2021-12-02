import React from "react";
class Sri extends React.Component{
  

    state={Name:"Kavitha", Loc:"Kolar"}    

    handleName=()=>{
        this.setState({Name:"Kavithasri"});
    };
    handleLoc=()=>{
        this.setState({Loc:"Davangere"});
    };

    render(){
        return(
            <div>
            <h1>{this.state.Name}</h1>
            <h1>{this.state.Loc}</h1>
            <button className="btn btn-danger" onClick={this.handlePicture}>Tap</button>
            <button className="btn btn-success" onClick={this.handleName}>Tap</button>
            <button className="btn btn-primary" onClick={this.handleLoc}>Tap</button>
            </div>
        )
    }
}
export default Sri;