import React from 'react';
import marked from 'marked';
import './App.css';

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href="${href}" target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
});

function Editor(props) {
  return (
    <div className="editor">
      <div className="top-bar">
        <div className="title-block">
          <span className="title">Editor</span>
          <span className="description">Enter markup text</span>
        </div>
        <i className="far fa-window-maximize" />
      </div>
      <textarea id="editor" value={props.input} onChange={props.onChange} />
    </div>
  );
}

function Preview({ output }) {
  return (
    <div className="preview">
      <div className="top-bar">
        <div className="title-block">
          <span className="title">Preview</span>
          <span className="description">Markup text is rendered here</span>
        </div>
        <i className="far fa-window-maximize" />
      </div>
      <div className="output" id="preview" dangerouslySetInnerHTML={output} />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line no-multi-str
      input: '# Hey there!  \n## Here\'s an H2!  \n\
Welcome to Pat Breen\'s markdown viewer!  \n\
I made it using [marked.js](https://marked.js.org)  \n\
With markdown, you can do all kinds of cool stuff, like  \n\
  - **add emphasis**  \n\
  -  `<div>look, here\'s some code!!</div>`  \n\
  \n\
Ok so that\'s what markdown is. Now I\'m going to use it to talk about... Aqua Teen? I guess? For now \n\
> Aqua Teen Hunger Force (also known by various alternative titles) is an American  \n\
> adult animated television series created by Dave Willis and Matt Maiellaro  \n\
> for Cartoon Network\'s late night programming block, Adult Swim.  \n\
> It is about the surreal adventures and antics of three anthropomorphic fast food items:  \n\
> Master Shake, Frylock, and Meatwad, who live together as relatives  \n\
> and frequently interact with their human next-door neighbor,  \n\
> Carl Brutananadilewski.  \n\
  \n\
![Aqua Teen Hunger Force](./assets/aqua_teen.png)  \n\
```  \n\
      I forgot the  \n\
      indented code block!  \n\
```',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  createMarkup() {
    return { __html: marked(this.state.input) };
  }

  render() {
    return (
      <div className="App">
        <Editor input={this.state.input} onChange={this.handleChange} />
        <Preview output={this.createMarkup()} />
      </div>
    );
  }
}

export default App;
