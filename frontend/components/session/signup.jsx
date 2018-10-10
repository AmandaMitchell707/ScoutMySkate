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
      this.setState({ [type]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/users'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            onChanged={this.handleInput('firstName')}>
        </input>
        </form>
      </div>
    );
  }
};

export default Signup;
