import React from 'react';
import { Link } from 'react-router-dom';
import { days, months, years, countries } from '../../util/signup_form_util';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
      birthday: '',
      gender: '',
      country: 'United States',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authState = this.authState.bind(this);
    this.genderClickHandler = this.genderClickHandler.bind(this);
  }

  authState() {
    return {
      first_name: this.state.fname,
      last_name: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      birth_date: `${this.state.year}-${this.state.month}-${this.state.day}`,
      gender: this.state.gender,
      country: this.state.country,
    };
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.authState())
      .then(() => this.props.history.push('/'));
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
    const countryOptions = countries.map(country => (
      <option value={country} key={country}>{country}</option>
    ));

    const dayOptions = days.map(day => (
      <option value={day} key={day}>{day}</option>
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
            value={this.state.fname}
            placeholder="First name"
            onChange={this.handleInput('fname')}
            required="required"
          />
          <br />
          <input
            className="auth-input"
            type="text"
            value={this.state.lname}
            placeholder="Last name"
            onChange={this.handleInput('lname')}
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
        </form>
      </div>
    );
  }
}

export default Signup;
