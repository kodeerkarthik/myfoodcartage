import React, { Component } from 'react';
import '../Css/Editorder.css'
import { Link } from "react-router-dom";

class Editorder extends Component {
	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<h1 className="mt-4">Orders</h1>
				<ol className="breadcrumb mb-4 bg-white cshadow">
					<li className="breadcrumb-item active"><Link to='/'>Dashboard</Link></li>
					<li className="breadcrumb-item active">Edit Orders</li>
				</ol>

				<div className="card mb-4 tshadow">
					<div className="card-header bg-white">
						<i className="fa fa-table mr-1"></i> Order Details
					</div>

					<div className="card-body">
						<div class="card mb-4 order-list tshadow">
							<div class="gold-members p-4">
								<div class="media">
									<a href="#"><img class="mr-4 generic_image" src={require('../Images/chicken.jpg')} alt="Generic placeholder image"/></a>
									<div class="media-body">
										<a href="#"><span class="float-right text-success">Delivered on Mon, Nov 12, 7:18 PM <i class="fa fa-check-circle-o text-success"></i></span></a>
										<h6 class="mb-3">
											<a href="detail.html" class="text-dark">Gus's World Famous Fried Chicken</a>
										</h6>
										<p class="text-black-50 mb-1" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'13px'}}>
											<i class="fa fa-map-marker"></i> 730 S Mendenhall Rd, Memphis, TN 38117, USA
										</p>
										<p class="text-black-50 mb-3" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'13px'}}>
											<i class="fa fa-list"></i> ORDER #25102589748 
											<i class="fa fa-clock-o ml-2" style={{fontSize:'13px'}}></i> Mon, Nov 12, 6:26 PM
										</p>
										<p class="text-dark">Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in Red Sauce x 1</p>
										<hr/>
										<div class="float-right">
											<a href="#0" class="btn btn-sm btn-success"><i class="fa fa-check-circle-o"></i> Approve</a>
											<a href="#0" class="btn btn-sm btn-info ml-2"><i class="fa fa-edit"></i> Edit</a>
											<a href="#0" class="btn btn-sm btn-danger ml-2"><i class="fa fa-trash-o"></i> Cancel</a>
										</div>
										<p class="mb-0 text-dark text-dark pt-2"><span class="text-dark font-weight-bold"> Total Paid:</span>  $300
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="table-responsive">
							<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Item ID</th>
										<th>Item</th>
										<th>Quantity</th>
										<th>Options</th>
										<th>Edit</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>45</td>
										<td>Enchiladas</td>
										<td>2</td>
										<td>Extra Tomato, Extra Pepper</td>
										<td><a href="#0"><strong>Delete</strong></a></td>
										<td>$12</td>
									</tr>
									<tr>
										<td>48</td>
										<td>Burrito</td>
										<td>1</td>
										<td>-</td>
										<td><a href="#0"><strong>Delete</strong></a></td>
										<td>$8</td>
									</tr>
									<tr>
										<td>89</td>
										<td>Chicken</td>
										<td>1</td>
										<td>-</td>
										<td><a href="#0"><strong>Delete</strong></a></td>
										<td>$10</td>
									</tr>
									<tr>
										<td>83</td>
										<td>Cheese Cake</td>
										<td>2</td>
										<td>-</td>
										<td><a href="#0"><strong>Delete</strong></a></td>
										<td>$20</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="row justify-content-end total_order">
							<div class="col-xl-3 col-lg-4 col-md-5">
								<ul class="list-unstyled text-muted font-weight-bold">
										<li class="d-flex align-items-center justify-content-between">
											<span>Subtotal</span> $40.00
										</li>
										<li class="d-flex align-items-center justify-content-between">
											<span>Delivery Fee</span> $7.00
										</li>
										<li class="d-flex align-items-center justify-content-between text-danger">
											<span>Total</span> $47.00
										</li>
								</ul>
								<a href="#0" class="btn btn-success btn-block">Place Order</a>
							</div>
						</div>

					</div>
				</div>	
			</div>
		);
	}
}

export default Editorder;
