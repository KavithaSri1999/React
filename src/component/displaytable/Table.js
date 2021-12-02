import React, { Component } from 'react'
import Tabledata from './Tabledata'
class Table extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="column-md-10">
                            <table className="table table-hover" >
                                <thead className="table-primary">
                                    <tr>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody className="table-dark">
                                    {Tabledata.map((ks)=>{
                                        return(
                                        <tr>
                                            <td>{ks.first_name}</td>
                                            <td>{ks.email}</td>
                                            <td>{ks.gender}</td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table

