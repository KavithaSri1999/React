import React, { Component } from 'react'
import Kavi3 from './Kavi3'

class Kavi2 extends Component {
    render() {
        return (
            <div>
                <h1>Comp B</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <Kavi3 emp_Name={this.props.e_Name} emp_Sal={this.props.e_Sal} emp_Loc={this.props.e_Loc}/>
            </div>
        )
    }
}

export default Kavi2
