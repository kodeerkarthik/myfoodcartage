import React, { Component } from 'react';
import '../Css/Dashboard.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import browserHistory from '../config/browserHistory';

class Dashboard extends Component {
	state={
		restaurant:[],
		users:[]
	}

	componentDidMount(){
		axios.get(`http://192.168.0.101:8080/resturant/get`)
      .then(res => {
				this.setState({ restaurant:res.data });
			})
		
		axios.get(`http://192.168.0.101:8080/user/get`)
      .then(res => {
				this.setState({ users:res.data });
				console.log(this.state.users)
			})
		const email=sessionStorage.getItem('email')
		axios.get('http://192.168.0.101:8080/resturant/read', {
			params: {
				email: email
			}
		}).then(res => {
			localStorage.setItem('current_user',JSON.stringify(res.data))
		})
	}
	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<h1 className="mt-4" >Dashboard</h1>
				<ol className="breadcrumb mb-4 bg-white cshadow">
					<li className="breadcrumb-item active">Dashboard </li>
				</ol>
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<div className="card bg-primary text-white mb-4">
								<div className="card-body">26 New Messages!</div>
								<div className="card-footer d-flex align-items-center justify-content-between">
									<a className="small text-white stretched-link" href="messages.html">View Details</a>
									<div className="small text-white"><i className="fa fa-angle-right" style={{fontWeight:'bold'}}></i></div>
								</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="card bg-warning text-white mb-4">
								<div className="card-body">10 New Bookings!</div>
								<div className="card-footer d-flex align-items-center justify-content-between">
									<a className="small text-white stretched-link" href="bookings.html">View Details</a>
									<div className="small text-white"><i className="fa fa-angle-right" style={{fontWeight:'bold'}}></i></div>
								</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="card bg-success text-white mb-4">
								<div className="card-body">11 New Reviews!</div>
								<div className="card-footer d-flex align-items-center justify-content-between">
									<a className="small text-white stretched-link" href="reviews.html">View Details</a>
									<div className="small text-white"><i className="fa fa-angle-right" style={{fontWeight:'bold'}}></i></div>
								</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="card bg-danger text-white mb-4">
								<div className="card-body">10 New Bookmarks!</div>
								<div className="card-footer d-flex align-items-center justify-content-between">
									<a className="small text-white stretched-link" href="bookmarks.html">View Details</a>
									<div className="small text-white"><i className="fa fa-angle-right" style={{fontWeight:'bold'}}></i></div>
								</div>
						</div>
					</div>
				</div>

				<div className='mb-3'>
					<a href="/menu" class="btn btn-sm btn-secondary">Menu List</a>
				</div>

				<div className="card mb-4 tshadow">
					<div className="card-header bg-white">
						<i className="fa fa-table mr-1"></i> RECENT 10 ORDER
					</div>

					<div className="card-body">
            <div className="table-responsive">
              <div  className="dataTables_wrapper dt-bootstrap4 no-footer">
								<div className="row">
									<div className="col-sm-12 col-md-6">
										<div className="dataTables_length" id="dataTable_length">
											<label>Show 
												<select name="dataTable_length" aria-controls="dataTable" className="custom-select custome_select custom-select-sm form-control form-control-sm">
													<option value="10">10</option>
													<option value="25">25</option>
													<option value="50">50</option>
													<option value="100">100</option>
												</select> entries
											</label>
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div id="dataTable_filter" className="dataTables_filter" style={{textAlign:"right"}}>
											<label>Search:<input type="search" className="form-control custome_search form-control-sm" placeholder="" aria-controls="dataTable"/></label>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
									<table className="table dataTable no-footer" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" style={{width: "100%"}}>
											<thead>
												<tr className="text-uppercase" role="row">
													<th rowSpan="1" colSpan="1" style={{width: "46px"}}>User</th>
													<th rowSpan="1" colSpan="1" style={{width: "100px"}}>User Name</th>
													<th rowSpan="1" colSpan="1" style={{width: "139px"}}>Restaurant</th>
													<th rowSpan="1" colSpan="1" style={{width: "62px"}}>Status</th>
													<th rowSpan="1" colSpan="1" style={{width: "155px"}}>Ordered on</th>
													<th rowSpan="1" colSpan="1" style={{width: "54px"}}>Total</th>
													<th rowSpan="1" colSpan="1" style={{width: "81px"}}>Quantity</th>
													<th rowSpan="1" colSpan="1" style={{width: "63px"}}>Action</th>
												</tr>
											</thead>
                      <tbody>                       
												<tr role="row" className="odd">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Rhona Davidson	</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-success btn-round">delivered</button></td>
													<td>Sat, Jul 11, 2020 1:38 AM</td>
													<td>$262.49</td>
													<td>4</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Herrod Chandler	</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-danger btn-round">cancel</button></td>
													<td>Fri, Jul 10, 2020 4:55 PM</td>
													<td>$170.77</td>
													<td>5</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Airi Satou	</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-success btn-round">delivered</button></td>
													<td>Fri, Jul 10, 2020 3:48 PM</td>
													<td>$26.78</td>
													<td>2</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Brielle Williamson	</td>
													<td>The Square restaurants</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-primary btn-round">created</button></td>
													<td>Fri, Jul 10, 2020 2:24 PM</td>
													<td>$81.23</td>
													<td>2</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Cedric Kelly	</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-success btn-round">delivered</button></td>
													<td>Fri, Jul 10, 2020 11:45 AM</td>
													<td>$1578.00</td>
													<td>1</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Ashton Cox	</td>
													<td>The Square restaurants</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-primary btn-round">created</button></td>
													<td>Fri, Jul 10, 2020 11:37 AM</td>
													<td>$238.53</td>
													<td>4</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Garrett Winters	</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-danger btn-round">rejected</button></td>
													<td>Thu, Jul 9, 2020 3:54 PM</td>
													<td>$107.85</td>
													<td>2</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Tiger Nixon	</td>
													<td>The Square restaurants</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-danger btn-round">rejected</button></td>
													<td>Thu, Jul 9, 2020 3:19 PM</td>
													<td>$83.65</td>
													<td>2</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="odd">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> AMITKUMAR CHAUHAN</td>
													<td>Jassi de Parathe</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-primary btn-round">created</button></td>
													<td>Thu, Jul 9, 2020 2:28 PM</td>
													<td>$46.62</td>
													<td>2</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
												<tr role="row" className="even">
													<td className="sorting_1"><img className="img-profile rounded-circle" src={require('../Images/user.jpg')} width='30px' alt=''/></td>
													<td> Umed Ibodulloev</td>
													<td>Metro Resto</td>
													<td><button disabled="" type="button" className="btn btn-sm btn-success btn-round">delivered</button></td>
													<td>Thu, Jul 9, 2020 1:26 PM</td>
													<td>$66.71</td>
													<td>1</td>
													<td><Link to={'/edit'} className="btn btn-primary btn-sm">View</Link></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-5">
										<div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
									</div>
									<div className="col-sm-12 col-md-7">
										<div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
											<ul className="pagination" style={{justifyContent: "flex-end"}}>
												<li className="paginate_button page-item previous disabled" id="dataTable_previous">
													<a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
												</li>
												<li className="paginate_button page-item active">
													<a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
												</li>
												<li className="paginate_button page-item next disabled" id="dataTable_next">
													<a href="#" aria-controls="dataTable" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
            </div>
					</div>
				</div>	

				<div className="card mb-4 tshadow">
					<div className="card-header bg-white">
						<i className="fa fa-table mr-1"></i> RESTAURANT LIST
					</div>
					<div className="card-body">
						<table className="table dataTable no-footer" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" style={{width: "100%"}}>
							<thead>
								<tr className="text-uppercase" role="row">
									<th rowSpan="1" colSpan="1" style={{width: "120px"}}>Resturant</th>
									<th rowSpan="1" colSpan="1" style={{width: "81px"}}>Contact</th>
									<th rowSpan="1" colSpan="1" style={{width: "60px"}}>email</th>
									<th rowSpan="1" colSpan="1" style={{width: "60px"}}>Phone </th>
									<th rowSpan="1" colSpan="1" style={{width: "110px"}}>Address</th>
									<th rowSpan="1" colSpan="1" style={{width: "50px"}}>GST / PAN</th>
									<th rowSpan="1" colSpan="1" style={{width: "63px"}}>Action</th>
								</tr>
							</thead>
							<tbody>                       	
								{this.state.restaurant.map(rest => {
									return(<tr role="row" className="odd">
										<td>{rest.resturant_name}</td>
										<td>{rest.contact_name}</td>
										<td>{rest.email}</td>
										<td>{rest.phone}</td>
										<td>{rest.address}</td>
										<td>{rest.gst}</td>
										<td><Link to={'#'} className="btn btn-primary btn-sm">View</Link></td>										
									</tr>)
								})}									
							</tbody>
						</table>
					</div>
				</div>
				
				<div className="card mb-4 tshadow">
					<div className="card-header bg-white" >
						<i className="fa fa-table mr-1"></i> USER LIST
					</div>
					<div className="card-body">
						<table className="table dataTable no-footer" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" style={{width: "100%"}}>
							<thead>
								<tr className="text-uppercase" role="row">
									<th rowSpan="1" colSpan="1">First Name</th>
									<th rowSpan="1" colSpan="1" >Last Name</th>
									<th rowSpan="1" colSpan="1" >Email</th>
									<th rowSpan="1" colSpan="1" >Phone</th>
									<th rowSpan="1" colSpan="1" >Address</th>
									<th rowSpan="1" colSpan="1" >Role</th>
								</tr>
							</thead>
							<tbody>                       
								{this.state.users.map(user => {
									return(<tr role="row" className="odd">
										<td>{user.firstname}</td>
										<td>{user.lastname}</td>
										<td>{user.email}</td>
										<td>{user.phone}</td>
										<td>{user.address}</td>
										<td>{user.role}</td>
										{/* <td>{rest.gst}</td>	 */}
										{/* <td><Link to={'#'} className="btn btn-primary btn-sm">View</Link></td>										 */}
									</tr>)
								})}
							</tbody>
						</table>
					</div>
				</div>

			</div>
		);
	}
}

export default Dashboard;
