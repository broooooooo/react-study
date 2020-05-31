import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      // <ValidationSample/>
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    )
  }
}

export default App;