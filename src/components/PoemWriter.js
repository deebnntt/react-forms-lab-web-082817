import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  onInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  checkError = () => {
    const poem = this.state.value;
    const lines = poem.split('\n');
    if (lines.length === 3) {
      let lineOne = lines[0].trim().split(/\s+/).length;
      let lineTwo = lines[1].trim().split(/\s+/).length;
      let lineThree = lines[2].trim().split(/\s+/).length;
      if (lineOne === 5 && lineTwo === 3 && lineThree === 5) {
        return true;
      }
    } else {
      return false;
    }
  };

  render() {
    const error = this.checkError() ? null : (
      <div id="poem-validation-error" style={{ color: 'red' }}>
        This poem is not written in the right structure!
      </div>
    );
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.onInputChange}>
          {this.state.value}
        </textarea>
        {error}
      </div>
    );
  }
}

export default PoemWriter;
