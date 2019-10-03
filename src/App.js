import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: <h1>dang</h1>,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("doink!");
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div className="App"> 
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
        <div id="preview">{this.state.input}</div>
      </div>
    );
  }
}

export default App;
