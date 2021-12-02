import React from "react";
class Kavi extends React.Component{
    

    state={
        Picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakFoyIvEdGRQrPhXFIdO4Wb984AkWvIXzuQ&usqp=CAU",
        Name:"Name: Kavitha",    Qualification:"Qualification: BE in ECE",      Hobby:"Hobby: Eating"

    };

    handleMypic=()=>{
        this.setState({Picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sw-H1Mt9KEfQtuAvKWuuU8wqFCyriET7Ug&usqp=CAU"});
    };

    handleMyname=()=>{
        this.setState({Name:"Kavi"});
    };

    handleMyqualification=()=>{
        this.setState({Qualification:"Engg"});
    };

    handleMyhobby=()=>{
        this.setState({Hobby:"Always eating"});
    };

   


    render(){
        return(
            <div>
                <img src={this.state.Picture} alt=""/>
                <h2>{this.state.Name}</h2>
                <h2>{this.state.Qualification}</h2>
                <h2>{this.state.Hobby}</h2>
                <button className="btn btn-success" onClick={this.handleMypic}>Tap me</button>
                <button className="btn btn-success" onClick={this.handleMyname}>Tap</button>
                <button className="btn btn-success" onClick={this.handleMyqualification}>Tap me</button>
                <button className="btn btn-success" onClick={this.handleMyhobby}>Tap me</button>
                
            </div>
        )
    }

}
export default Kavi;
