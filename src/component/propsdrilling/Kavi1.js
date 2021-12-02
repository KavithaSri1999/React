import React, { Component } from 'react'
import Kavi2 from './Kavi2'

class Kavi1 extends Component {
    Name="Kavitha"; Sal=50000; Loc="BNG";
    render() {
        return (
            <>
                <h1>Comp A</h1>
                <Kavi2 e_Name={this.Name} e_Sal={this.Sal} e_Loc={this.Loc}/>
            </>
        )
    }
}
    
export default Kavi1
