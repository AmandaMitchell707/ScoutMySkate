import React from 'react';

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
      country: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  // createSelectMenu(range) {
  //   range.forEach(el => (
  //     <option value={el}>{el}</option>
  //   ));
  // }

  render() {
    return (
      <div className="session-form">
        <h2>SIGN UP</h2>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.handleInput('firstName')}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handleInput('lastName')}
          /><br />
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInput('email')}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')}
          />
          <br />
          <select name="month"
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
          <br />
          <label>Male
            <input
              type="radio"
              name="m"
              value={this.state.gender}
              onChange={this.handleInput('month')} />
          </label>
          <label>Female
            <input
              type="radio"
              name="f"
              value={this.state.gender}
              onChange={this.handleInput('month')} />
          </label>
          <br />
          <button className="sign-up-button" onClick={this.handleSubmit}>SIGN UP</button>
        </form>
      </div>
    );
  }
};

export default Signup;
