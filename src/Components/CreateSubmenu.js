import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import browserHistory from '../config/browserHistory';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
	
class CreateSubmenu extends Component {
  constructor(props){
		super(props);
		this.state = {
      submenu:'',
      timings:'',
      price:'',
      keywords:'',
		}
  }
  
  componentDidMount(){
    // const id=this.props.location.state.id
    // alert(this.props.location.state.menu_id)
  }

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value})
  }
  
  handleSubmit = (e) => {
		e.preventDefault();
    var {submenu,timings,price,keywords}=this.state;
    console.log(submenu,timings,price,keywords,this.props.location.state.menu_id)
    const menu_id=this.props.location.state.menu_id
    price=parseFloat(price);
		axios.post(`http://192.168.0.101:8080/submenu/create`, { submenu,timings,price,keywords,menu_id})
			.then(res => {
				console.log(res);
				toast.success("Successfully added", {position: "top-center"})
				browserHistory.push('/menu')
			}). catch(err => {
				console.log(err)
			})
  }
  
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="container-fluid pt-5 mt-2">
          <h1 className="mt-4">Add Sub-Menu</h1>
          <ol className="breadcrumb mb-4 bg-white cshadow">
            <li className="breadcrumb-item active"><Link to='/'>Dashboard</Link></li>
            <li className="breadcrumb-item active"><Link to='/menu'>Menu List</Link></li>
            {/* <li className="breadcrumb-item active"><Link to='/submenu'>Sub-Menu List</Link></li> */}
            <li className="breadcrumb-item active">Add Sub-Menu</li>
          </ol>

          <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
              <div className="form-group">
                <label className="small mb-1 mt-3" >Sub menu</label>
                <input className="form-control" type="text" name='submenu' onChange={this.handleChange} placeholder="Submenu name"  autocomplete="off"/>

                <label className="small mb-1 mt-3" >Timings</label>
                <input className="form-control" type="text" name='timings' onChange={this.handleChange} placeholder="Timings"  autocomplete="off"/>
                
                <label className="small mb-1 mt-3" >Price</label>
                <input className="form-control" type="number" name='price' onChange={this.handleChange} placeholder="Price"  autocomplete="off"/>

                <label className="small mb-1 mt-3" >Keywords</label>
                <input className="form-control" type="text" name='keywords' onChange={this.handleChange} placeholder="Keywords" autocomplete="off"/>
                
                <button className="btn btn-primary btn-block mt-4 " onClick={this.handleSubmit}>Add Menu</button>
              </div>
            </div>
            <div className='col-3'></div>					
          </div>
		  	</div>
      </div>
    );
  }
}

export default CreateSubmenu;
