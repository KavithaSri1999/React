import React from "react";
class Product extends React.Component{
     state={Product_name:"IPhone SE", Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhhhW4SormuE07MCiOTI23QtGiLLGAGCmEA&usqp=CAU",
     Price:60000,  Quantity:0};

        decrHanlder=()=>{
            this.setState({Quantity:this.state.Quantity - 1});
        };

        incrHanlder=()=>{
            this.setState({Quantity:this.state.Quantity + 1});
        };

  render(){
      return(
          <>
          <div className="container mt-5">
              <div className="rows">
                  <div className="col-md-6">
                    <table class="table table-hover">
                        <thead>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product_name}</td>
                                <img src={this.state.Image} height="50px"/>
                                <td>{this.state.Price}</td>
                                <td>
                                    <i class="fa fa-minus-circle" onClick={this.decrHanlder}></i>
                                    {this.state.Quantity}
                                    <i class="fa fa-plus-circle" onClick={this.incrHanlder}></i>
                                </td>
                                <td>{this.state.Price * this.state.Quantity}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>
          </div>    
        </>
      );  
    };  
}
export default Product;