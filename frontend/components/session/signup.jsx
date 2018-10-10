import React from 'react';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName = '',
      lastName = '',
      email = '',
      password = '',
      birthDate = '',
      gender = '',
      country = '',
    };
  }

  handleInput(type) {
    return () => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleInput('firstName')}
          />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleInput('lastName')}
          />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleInput('email')}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
        <select name="day">
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        <select name="month">
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

        </form>
      </div>
    );
  }
};

export default Signup;
