import React, { Component } from 'react'


class Login extends Component {
    constructor() {
        super();
        this.state ={
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(e){
    e.preventDefault();
    const user ={
        username: this.state.username,
        password: this.state.password,
    }
    console.log(user);
}

onChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

  render() {
    return (
      <div className="login">
      <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your realiTi account</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input 
                        type="username" 
                        className="form control form-control-lg" 
                        placeholder="Username"
                        name="username" 
                        value={this.state.username}
                        onChange={this.onChange}
                        /> 
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form control form-control-lg" 
                        placeholder="Password"
                        name="password"  
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Login; 
