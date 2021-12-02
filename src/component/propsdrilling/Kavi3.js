import React, { Component } from "react";

class Kavi3 extends Component {

    render(){
        return(
            <>
            <h1>Comp C</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1>{this.props.emp_Name}</h1>
            <h1>{this.props.emp_Sal}</h1>
            <h1>{this.props.emp_Loc}</h1>
            </>
        )
    }

}
export default Kavi3