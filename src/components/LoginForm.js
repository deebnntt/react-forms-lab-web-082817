import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  updatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  // formSubmit = event => {
  //   event.preventDefault();
  //
  //   if (this.state.username.length > 0 && this.state.password.length > 0) {
  //     this.props.login(this.state.username, this.state.password);
  //   }
  // };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      let username = this.state.username;
      let password = this.state.password;
      this.props.onSubmit({ username, password });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.updateUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </label>
        </div>
        <div>
          <button id="submit" type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
