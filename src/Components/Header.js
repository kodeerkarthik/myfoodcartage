import React, { Component } from 'react';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import Sidenav from './Sidenav'
import '../Css/Header.css'

class Header extends Component {
	constructor(){
    super();
    this.state = {
      showNav:false,
      menuStatus:"open"
    };
	};

	logout = () => {
		sessionStorage.removeItem('auth')
		sessionStorage.removeItem('email')
		localStorage.removeItem('current_user')
	}
	
	render() {
		return (
			<div className="cshadow header_body">
				<nav className="custom_nav sb-topnav navbar navbar-expand navbar-light bg-white shadow-sm">
					<a className="navbar-brand custome_brand" href="/">
						<img alt="logo" height='30px' src={require('../Images/logo.png')}/>
					</a>


					{/* <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#" >
						<i className="fa fa-bars" style={{color:'black'}} onClick={() => this.setState({showNav: true})}></i> 
					</button> */}
					<SideNav mode='push' style={{maxWidth: '250px', width:'100%',}} showNav = {this.state.showNav} onHideNav = {() => this.setState({showNav: false})} >
						<Sidenav/>
					</SideNav>


				 {/* Navbar Search */}
        	<form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
							<input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
							<div className="input-group-append">
								<button className="btn btn-primary btn-sm" type="button"><i className="fa fa-search"></i></button>
							</div>
            </div>
         	</form>
					{/* {this.props.user.displayName} */}
         <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              	<i className="feather-search mr-2"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
								<form className="form-inline mr-auto w-100 navbar-search">
									<div className="input-group">
										<input type="text" className="form-control border-0 shadow-none" placeholder="Search people, jobs and more..." aria-label="Search" aria-describedby="basic-addon2"/>
										<div className="input-group-append">
											<button className="btn" type="button">
											<i className="feather-search"></i>
											</button>
										</div>
									</div>
								</form>
               </div>
            </li>
            {/* <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i className="fa fa-message-square"></i>
								<span className="badge badge-danger badge-counter">8</span>
							</a>
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
								<h6 className="dropdown-header">Message Center</h6>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="dropdown-list-image mr-3">
										<img className="rounded-circle" src="img/user/2.png" alt=""/>
										<div className="status-indicator bg-success"></div>
									</div>
									<div className="font-weight-bold overflow-hidden">
										<div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
										<div className="small text-gray-500">Emily Fowler · 58m</div>
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="dropdown-list-image mr-3">
										<img className="rounded-circle" src="img/user/3.png" alt=""/>
										<div className="status-indicator"></div>
									</div>
									<div className="overflow-hidden">
										<div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
										<div className="small text-gray-500">Jae Chun · 1d</div>
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="dropdown-list-image mr-3">
										<img className="rounded-circle" src="img/user/4.png" alt=""/>
										<div className="status-indicator bg-warning"></div>
									</div>
									<div className="overflow-hidden">
										<div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
										<div className="small text-gray-500">Morgan Alvarez · 2d</div>
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="dropdown-list-image mr-3">
										<img className="rounded-circle" src="img/user/5.png" alt=""/>
										<div className="status-indicator bg-success"></div>
									</div>
									<div className="overflow-hidden">
										<div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
										<div className="small text-gray-500">Chicken the Dog · 2w</div>
									</div>
								</a>
								<a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i className="feather-bell"></i>
								<span className="badge badge-info badge-counter">6</span>
							</a>
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
								<h6 className="dropdown-header">Alerts Center</h6>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-primary">
											<svg className="svg-inline--fa fa-download fa-w-16 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
											<i className="fas fa-download text-white"></i> 
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 12, 2020</div>
										<span className="font-weight-bold">A new monthly report is ready to download!</span>
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-success">
											<svg className="svg-inline--fa fa-edit fa-w-18 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
											 <i className="fas fa-edit text-white"></i> 
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 7, 2020</div>
										$290.29 has been deposited into your account!
									</div>
								</a>
								<a className="dropdown-item d-flex align-items-center" href="#">
									<div className="mr-3">
										<div className="icon-circle bg-warning">
											<svg className="svg-inline--fa fa-folder fa-w-16 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>
											 <i className="fas fa-folder text-white"></i> 
										</div>
									</div>
									<div>
										<div className="small text-gray-500">December 2, 2020</div>
										Spending Alert: We've noticed unusually high spending for your account.
									</div>
								</a>
								<a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
               </div>
            </li>
             */}
						 {/* Nav Item - User Information  */}
            <li className="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
							<a className="nav-link dropdown-toggle pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{this.props.user.photoURL?
									<img className="img-profile rounded-circle"  src={this.props.user.photoURL} width='30px' alt="user"/>
									: <img className="img-profile rounded-circle"  src={require('../Images/user.jpg')} width='30px' alt="user"/>
								}
              </a>
                {/* Dropdown - User Information */}
							<div className="dropdown-menu dropdown-menu-right shadow-sm">
								<div className="p-3 d-flex align-items-center">
									<div className="dropdown-list-image mr-3">
										{this.props.user.photoURL?
											<img className="img-profile rounded-circle"  src={this.props.user.photoURL} width='50px' alt="user"/>
											: <img className="img-profile rounded-circle"  src={require('../Images/user.jpg')} width='50px' alt="user"/>
										}
										<div className="status-indicator bg-success"></div>
									</div>
									<div className="font-weight-bold">
										<div className="text-truncate text-uppercase">
											{this.props.user.displayName? (this.props.user.displayName): "Un-known"}
										</div>
										<div className="small text-gray-500">Restaurants Owner</div>
									</div>
								</div>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="my-profile.html"><i className="fa fa-edit"></i> My Account</a>
								<a className="dropdown-item" href="my-profile.html"><i className="fa fa-cog"></i> Account Settings</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href='/' onClick={this.logout}><i className="fa fa-sign-out"></i> Logout</a>
							</div>
            </li>
         	</ul>
				</nav>			
			</div>
		);
	}
}

export default Header;
