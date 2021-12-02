import React, { Component } from 'react'
import Tab3 from './Tab3'

 class Tab2 extends Component {
    render() {
        return (
            <div>
            <h1>tab2</h1>
            <pre>{JSON.stringify(this.props)}</pre> 
                <Tab3  d_aa={this.props.d_name} d_bb={this.props.d_sal} d_cc={this.props.d_img}/>


            </div>
        )
    }
}

export default Tab2
