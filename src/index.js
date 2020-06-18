import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import marked from 'marked';

const defaultInput = `# Welcome to my React Markdown Previewer!
## This is a subheading!

Here's an example of a [link](https://github.com/ravenblack24/markdown-previewer)

This is some _inline_ sample code <code>\`<div>Hello World!</div>\`</code>

How about some **list items** next:

- List item 1
-- Sub list item
- List item 2

> Look, a block quote!

### Last _but not least_:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

function Header(props) {
  return (
    <header>
      <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
      <h1 className="section-title">{props.title}</h1>
      <FontAwesomeIcon icon={faWindowMaximize} className="icon icon-action" onClick={props.handleResize} />
    </header>
  );
} 

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    }
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
      this.setState({fullScreen: !this.state.fullScreen});
  }
  render () {
    const css = (this.props.title).toLowerCase();
    return (
      <section className={this.state.fullScreen ? `${css} ${css}--fullscreen` : css}>
        <Header title={this.props.title} handleResize={this.handleResize}/>
        {this.props.component}
      </section>
    );
  }
}

class MarkDownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: 'hiya'
    };
    this.handleChange = this.handleChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    this.setState({input: defaultInput});
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  createMarkup() {
    console.log(marked(this.state.input));
    return{__html: marked(this.state.input)}
  }

  render() {
    return (
      <React.Fragment>
        <Panel component={<textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>} title={"Editor"}/>
        <Panel component={<div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />} title={"Previewer"}/>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MarkDownPreviewer />
  </React.StrictMode>,
  document.getElementById('root')
);