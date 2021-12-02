import React, { Component } from 'react'

class Tab3 extends Component {
    render() {
        return (
            <div>
                <h1>Tab3</h1>
                <pre>{JSON.stringify(this.props)}</pre> 
               <img src={this.props.d_cc}/>
               <h1 >{this.props.d_aa}</h1>
               <h1 >{this.props.d_bb}</h1>
            </div>
        )
    }
}

export default Tab3
