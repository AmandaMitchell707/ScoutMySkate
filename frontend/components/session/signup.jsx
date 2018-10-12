import React from 'react';
import { Link } from 'react-router-dom';
import { days, months, years, countries } from '../../util/signup_form_util';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
      birthDate: '',
      gender: '',
      country: 'United States',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authState = this.authState.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  authState() {
    return {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      birthDate: `${this.state.year}-${this.state.month}-${this.state.day}`,
      gender: this.state.gender,
      country: this.state.country,
    };
  }



  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state, this.authState());
    this.props.createNewUser(this.authState())
      .then(() => this.props.history.push('/'));
  }

  render() {
    const countryOptions = countries.map(country => (
      <option value={country} key={country}>{country}</option>
    ));

    console.log(this.state);
    return (
      <div className="session-form-container">
        <div className="session-form-header">
          <Link to="/auth/login" className="alt-login-link"><span>Log In</span></Link>
          <h2 className="auth-title">SIGN UP</h2>
        </div>
        <form>
          <input
            className="auth-input"
            type="text"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.handleInput('firstName')}
          />
          <br />
          <input
            className="auth-input"
            type="text"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handleInput('lastName')}
          /><br />
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
          <div className="birthday-container">
            <select
              name="day"
              className="auth-input birthday day"
              value={this.state.day}
              onChange={this.handleInput('day')}>
                <option >Day</option>
              {
                days.map(day => (
                  <option value={day} key={day}>{day}</option>
                  )
                )
              }
            </select>
            <select
              name="month"
              className="auth-input birthday month"
              value={this.state.month}
              onChange={this.handleInput('month')}>
              <option >Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              name="year"
              className="auth-input birthday year"
              value={this.state.year}
              onChange={this.handleInput('year')}>
                <option >Year</option>
              {
                years.map(year => (
                  <option value={year} key={year}>{year}</option>
                  )
                )
              }
            </select>
          </div>
          <br />
          <div className="gender-container">
            <div
              className="auth-input gender"
              onClick={() => this.setState({ gender: 'm' })}
              >Male
            </div>
            <div
              className="auth-input gender"
              onClick={() => this.setState({ gender: 'f' })}
              >Female
            </div>
            <div
              className="auth-input gender"
              onClick={() => this.setState({ gender: 'o' })}
              >Other
            </div>
          </div>
          <br />
          <select
            name="country"
            className="auth-input country"
            value={this.state.country}
            onChange={this.handleInput('country')}>
              <option >Country</option>
            {
              countryOptions
            }
          </select>
          <br />
          <button className="auth-submit-button" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
