import React, { Component } from 'react';
import { Link } from "react-router-dom";
import browserHistory from '../config/browserHistory';
import api from	'../api/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MenuList extends Component {
	state={
		menu:[]
	}

	submenu=(id)=>{
		browserHistory.push({pathname:'/submenu', state: {menu_id : id}})
	}

	deleteMenu=(id,name)=>{
		api.delete(`menu/delete`, {
			params: {
				menu_id: id
			}
		}).then(res => {
				console.log(res)
				if(res.status == 200){
					toast.warning(name+" Deleted successfully", {position: "top-center"})
					this.getMenu();
				}
			})
	}

	componentDidMount(){
		this.getMenu();
	}

	getMenu =()=>{
		const resturant_id=JSON.parse(localStorage.getItem('current_user')).resturant_id
		api.get(`menu/get`, {
			params: {
				resturant_id: resturant_id
			}
		}).then(res => {
				this.setState({ menu:res.data });
			})
	}

	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<ToastContainer />

				<h1 className="mt-4">Menu</h1>
				<ol className="breadcrumb mb-4 bg-white cshadow">
					<li className="breadcrumb-item active"><Link to='/'>Dashboard</Link></li>
					<li className="breadcrumb-item active">Menu List</li>
				</ol>

				<div className='mb-3'>
					<a href="/addlist" class="btn btn-sm btn-success">Add List</a>
				</div>
				
				<div className="card mb-4">
					<div className="card-header bg-white">
						<i className="fa fa-table mr-1"></i> Menu List
					</div>

					<div className="row">
						{this.state.menu.map(item => {
							return(<div className="col-6">
								<div class="m-4 tshadow p-4 card-body">
									<div class="media">
										<img class="mr-4 generic_image" onClick={() => this.submenu(item.menu_id)}  src={require('../Images/chicken.jpg')} alt="Generic placeholder image"/>
										<div class="media-body">
											<h6 class="text-dark mb-3">{item.menu}</h6><hr/>
											<div>
												<p class="text-black-50 mb-3" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'15px'}}>restuarant name</p>
												{/* <a href="#0" class="btn btn-sm btn-info mr-2 "><i class="fa fa-edit"></i></a> */}
												<button onClick={() => this.submenu(item.menu_id)} class="btn btn-sm btn-info mr-2"><i class="fa fa-eye"></i> View</button>
												<button onClick={() => this.deleteMenu(item.menu_id,item.menu)} class="btn btn-sm btn-danger"><i class="fa fa-trash-o"></i> Delete</button>
											</div>
										</div>
									</div>
								</div>
							</div>)
						})}						
					</div>

				</div>	
			</div>
		);
	}
}



export default MenuList;
