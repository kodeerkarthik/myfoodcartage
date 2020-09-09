import React, { Component } from 'react';
import fire from '../config/fire';
import firebase from 'firebase';
import browserHistory from '../config/browserHistory'


class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			email : '',
			password : ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value})
	}

	login = (e) => {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(u=>{
			console.log(u)
			sessionStorage.setItem('auth', u.user.uid)
			browserHistory.push('/dashboard')
		}).catch(err => {
			console.log(err);
		})
	}

	googleLogin = (e) => {
		e.preventDefault();
		var provider = new firebase.auth.GoogleAuthProvider();
		fire.auth().signInWithPopup(provider).then(u => {
			console.log(u)
			sessionStorage.setItem('auth', u.user.uid)
			browserHistory.push('/dashboard')
		}).catch(err => {
			console.log(err)
		})
	}

	render() {
		return (
			<div style={{background:"#3259ff",width:"100%",padding:'62px 0 100px 0'}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="card shadow-lg border-0 rounded-lg mt-5">
								<div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label className="small mb-1">Email</label>
											<input className="form-control " name='email' onChange={this.handleChange} type="email" placeholder="Enter email address"/>
										</div>
										<div className="form-group">
											<label className="small mb-1">Password</label>
											<input className="form-control " name='password' onChange={this.handleChange} type="password" placeholder="Enter password"/>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox">
												<input className="custom-control-input" id="rememberPasswordCheck" type="checkbox"/>
												<label className="custom-control-label">Remember password</label>
											</div>
										</div>
										<div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
											<a className="small" href="#">Forgot Password?</a>
											<button className="btn btn-primary" onClick={this.login}>Login</button>
										</div>
										<button class="btn btn-danger btn-block mt-4" onClick={this.googleLogin}>
											<i class="fa fa-google mr-1"></i> Sign in with <b>Google</b>
										</button>
									</form>
								</div>
								<div className="card-footer text-center">
										<div className="small"><a href="register">Need an account? Sign up!</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
