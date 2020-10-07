import React, { Component } from 'react';
import fire from '../config/fire';
import axios from 'axios';
import api from '../api/index';
import browserHistory from '../config/browserHistory'
class Register extends Component {

	constructor(props){
		super(props);
		this.state = {
			firstname : '',
			lastname : '',
			email : '',
			phone : '',
			password : '',
			confirmPassword : '',
			role : 'user',
			resturant_name : '',
			contact_name : '',
			address : '',
			gst : ''
		}
	}

	handleChange =(e)=> {
		this.setState({[e.target.name] : e.target.value})
	}

	register = (e) => {
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
		.then(u => {
			console.log(u)
			const { firstname,lastname,email,phone, role,	resturant_name, contact_name, address, gst} = this.state
			if(this.state.role == 'user'){
				api.post(`user/create`, { firstname,lastname,email,phone,role,address})
				.then(res => {
					console.log(res);
					browserHistory.push('/')
				}). catch(err => {
					console.log(err)
				})
			} else {
				debugger
				api.post(`resturant/create`, { resturant_name,contact_name,email,phone,role,address,gst})
				.then(res => {
					console.log(res);
					browserHistory.push('/')
				}). catch(err => {
					console.log(err)
				})
			}
		}). catch(err => {
			console.log(err)
		})
		document.getElementById("myForm").reset();
	}

	roleChange = (e) =>{
		this.setState({[e.target.name] : e.target.value})
		document.getElementById("myForm").reset();
	}

	render() {
		return (
			<div style={{background:"#3259ff",width:"100%",padding:'10px 0 100px 0'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
            	<div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                <div className="card-body">
									<div className="form-group">
										{/* <label className="small mb-1">Role</label> */}
										<select class="form-control form-control-sm" name='role' onChange={this.roleChange} >
											<option selected disabled hidden>Select role</option>
											<option value='user'>User</option>
											<option value='resturant'>Resturant</option>
										</select>
									</div>
          				<form id= 'myForm'>
										{this.state.role=='resturant' ? 
											<div className="form-row">
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1" >Resturant name</label> */}
													<input className="form-control" type="text" name='resturant_name' onChange={this.handleChange} placeholder="Enter resturant name"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Contact Name</label> */}
													<input className="form-control" type="text"  name='contact_name' onChange={this.handleChange} placeholder="Enter contact name"/>
												</div>
											</div>
										</div>
										:
										<div className="form-row">
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1" >First Name</label> */}
													<input className="form-control" type="text" name='firstname' onChange={this.handleChange} placeholder="Enter first name"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Last Name</label> */}
													<input className="form-control" type="text"  name='lastname' onChange={this.handleChange} placeholder="Enter last name"/>
												</div>
											</div>
										</div>
										}
										<div className="form-row">
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Email</label> */}
													<input className="form-control" type="email" name='email' onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email address"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Phone</label> */}
													<input className="form-control" type="text" name='phone' onChange={this.handleChange} placeholder="Enter phone number"/>
												</div>
											</div>
                    </div>
										<div className="form-row">
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1" >Password</label> */}
													<input className="form-control " type="password" name='password' onChange={this.handleChange} placeholder="Enter password"/>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Confirm Password</label> */}
													<input className="form-control" type="password" name='confirmPassword' onChange={this.handleChange} placeholder="Confirm password"/>
												</div>
											</div>
                    </div>

										
										<div className="form-row">
											<div className="col-md-6">
												<div className="form-group">
													{/* <label className="small mb-1">Address</label> */}
													<input className="form-control" type="text" name='address' onChange={this.handleChange} placeholder="Enter address"/>
												</div>
											</div>
											{this.state.role=='resturant' ? 
												<div className="col-md-6">
													<div className="form-group">
														{/* <label className="small mb-1">GST / PAN</label> */}
														<input className="form-control" type="text" name='gst' onChange={this.handleChange}  placeholder="Enter GST / PAN"/>
													</div>
												</div>
												:
												<></>
											}
										</div> 
                    <div className="form-group mt-4 mb-0">
											<button className="btn btn-primary btn-block" onClick={this.register}>Create Account</button>
										</div>
                  </form>
                </div>
								<div className="card-footer text-center">
									<div className="small"><a href="/">Have an account? Go to login</a></div>
								</div>
							</div>
						</div>
        	</div>
        </div>
			</div>
		);
	}
}

export default Register;
