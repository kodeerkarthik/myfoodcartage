import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from '../config/browserHistory';
	
class AddList extends Component {
	constructor(props){
		super(props);
		this.state = {
			menu:'',
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const menu=this.state.menu;
		console.log(menu)
		const resturant_id=JSON.parse(localStorage.getItem('current_user')).resturant_id
		axios.post(`http://192.168.0.101:8080/menu/create`, { menu,resturant_id})
			.then(res => {
				toast.success("Successfully added", {position: "top-center"})
				browserHistory.push('/menu')
			}). catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<ToastContainer />
				<h1 className="mt-4">Add Menu</h1>
				<ol className="breadcrumb mb-4 bg-white cshadow">
					<li className="breadcrumb-item active"><Link to='/'>Dashboard</Link></li>
					<li className="breadcrumb-item active"><Link to='/menu'>Menu List</Link></li>
					<li className="breadcrumb-item active">Add menu</li>
				</ol>

				<div className='row'>
					<div className='col-3'></div>
					<div className='col-6'>
						<div className="form-group">
							<label className="small mb-1" >Menu name</label>
							<input className="form-control" type="text" name='menu' onChange={this.handleChange} placeholder="Menu name"  autocomplete="off"/>
							<button className="btn btn-primary btn-block mt-3 " onClick={this.handleSubmit}>Add Menu</button>
						</div>
					</div>
					<div className='col-3'></div>					
				</div>
				


			</div>
		);
	}
}

export default AddList;
