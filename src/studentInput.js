import React from 'react';

class BasicInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onHandleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value }, () => {
      this.props.callback({
        "name": this.state.name,
        "rollNumber": this.state.rollNumber,
        "email": this.state.email,
      });
    })
  }

  render() {
    return (
      <div>
        Name:
          <input
          onChange={this.onHandleChange}
          name='name'
          value={this.state.name}
        /><br />
        Roll Number:
                    <input
          onChange={this.onHandleChange}
          name='rollNumber'
          value={this.state.rollNumber}
        /><br />
        Email :
                    <input
          onChange={this.onHandleChange}
          name='email'
          value={this.state.email}
        /><br />
      </div>
    );
  }
};

export default BasicInputForm;
