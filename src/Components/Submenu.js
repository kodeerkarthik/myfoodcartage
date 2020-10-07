import React, { Component } from 'react';
import { Link } from "react-router-dom";
import browserHistory from '../config/browserHistory';
import api from '../api/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Submenu extends Component {
	state={
		submenu:[]
	}
	componentDidMount(){
		this.getSubmenulist();
	}

	getSubmenulist = () => {
		const id=this.props.location.state.menu_id
		api.get(`submenu/get`, {
			params: {
				menu_id: id
			}
		}).then(res => {
			console.log(res.data)
				this.setState({ submenu:res.data });
			})
	}

	deleteSubmenu = (id,name) =>{
		api.delete(`submenu/delete`, {
			params: {
				submenu_id: id
			}
		}).then(res => {
				console.log(res)
				if(res.status == 200){
					toast.warning(name+" Deleted successfully", {position: "top-center"})
					this.getSubmenulist();
				}
			})
	}

	createsubmenu=()=>{
		browserHistory.push({pathname:'/addsubmenu', state: {menu_id : this.props.location.state.menu_id}})
	}

	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<ToastContainer />
				<h1 className="mt-4">Sub Menu</h1>
				<ol className="breadcrumb mb-4 bg-white cshadow">
					<li className="breadcrumb-item active"><Link to='/'>Dashboard</Link></li>
					<li className="breadcrumb-item active"><Link to='/menu'>Menu List</Link></li>
					<li className="breadcrumb-item active">Sub Menu List</li>
				</ol>

				<div className='mb-3'>
					<button class="btn btn-sm btn-success" onClick={this.createsubmenu}>Add Sub menu</button>
				</div>

				<div className='row'>
					{this.state.submenu.map(item => {
						return(
							<div className='col-4 mb-5 '>
								<div className='m-1 tshadow'>
									<div className='media p-2'>
										<img class="mr-4 generic_image" src={require('../Images/chicken.jpg')} alt="Generic placeholder image"/>
										<div className='media-body'>
											<h6 class="text-dark mb-3">{item.submenu}</h6><hr/>
											<span class="text-black-50 mb-3" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'15px'}}>{item.timings} min</span>
											<span class="text-black-50 mb-3" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'15px', float:'right'}}>{item.price}$</span>
											<p>
												<a href="#" class="btn btn-sm btn-warning mt-2 mr-2"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Order Now</a>
												<button onClick={() => this.deleteSubmenu(item.submenu_id,item.submenu)} class="btn btn-sm btn-danger mt-2"><i class="fa fa-trash-o"></i> Delete</button>
											</p>
										</div>
									</div>
								</div>	
							</div>
						)
					})}
				</div>

			</div>
		);
	}
}

export default Submenu;
