import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.replace('/'));
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <div className="session-form-header">
          <Link to="/auth/signup" className="alt-login-link"><span>Sign Up</span></Link>
          <h2 className="auth-title">LOG IN</h2>
        </div>
        <form>
          {this.renderErrors()}
          <input
            className="auth-input"
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInput('email')}
          />
          <br />
          <input
            className="auth-input"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')}
          />
          <br />
          <button className="auth-submit-button" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
