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
    this.genderClickHandler = this.genderClickHandler.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  genderClickHandler(e) {
    $(".gender-container div").removeClass("gender-focus");
    this.setState({ gender: e.target.id });
    $(".gender-container div").each((idx, div) => {
      if (div.id === e.target.id) {
        $(div).addClass("gender-focus");
      }
    });
  }

  newUserParams() {
    return {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      birth_date: `${this.state.year}-${this.state.month}-${this.state.day}`,
      gender: this.state.gender,
      country: this.state.country,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.newUserParams())
      .then(() => this.props.history.push('/routes/create'));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.loginDemoUser()
      .then(() => this.props.history.push('/routes/create'));
  }

  render() {
    const countryOptions = countries.map((country, idx) => (
      <option value={country} key={idx}>{country}</option>
    ));

    const dayOptions = days.map(day => (
      <option value={day} key={day}>{day}</option>
    ));

    const monthOptions = months.map((month, idx) => (
      <option value={idx + 1} key={idx}>{month}</option>
    ));

    const yearOptions = years.map(year => (
      <option value={year} key={year}>{year}</option>
    ));

    return (
      <div className="session-form-container">
        <div className="session-form-header">
          <Link to="/auth/login" className="alt-login-link"><span>Log In</span></Link>
          <h2 className="auth-title">SIGN UP</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <br />
          <input
            className="auth-input"
            type="text"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.handleInput('firstName')}
            required="required"
          />
          <br />
          <input
            className="auth-input"
            type="text"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handleInput('lastName')}
            required="required"
          /><br />
          <input
            className="auth-input"
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInput('email')}
            required
          />
          <br />
          <input
            className="auth-input"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')}
            required="required"
          />
          <br />
          <div className="birthday-container">
            <select
              name="day"
              className="auth-input birthday day"
              value={this.state.day}
              onChange={this.handleInput('day')}>
                <option >Day</option>
                {dayOptions}
            </select>
            <select
              name="month"
              className="auth-input birthday month"
              value={this.state.month}
              onChange={this.handleInput('month')}>
              <option >Month</option>
              {monthOptions}
            </select>
            <select
              name="year"
              className="auth-input birthday year"
              value={this.state.year}
              onChange={this.handleInput('year')}>
                <option >Year</option>
                {yearOptions}
            </select>
          </div>
          <br />
          <div className="gender-container">
            <div
              id="m"
              className="auth-input gender"
              value="m"
              onClick={this.genderClickHandler}
              >Male
            </div>
            <div
              id="f"
              className="auth-input gender"
              value="f"
              onClick={this.genderClickHandler}
              >Female
            </div>
            <div
              id="o"
              className="auth-input gender"
              value="o"
              onClick={this.genderClickHandler}
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
              {countryOptions}
          </select>
          <br />
          <button className="auth-submit-button">Sign Up</button>
          <button onClick={this.handleDemoLogin} className="auth-submit-button">Demo Log In</button>
        </form>
      </div>
    );
  }
}

export default Signup;
