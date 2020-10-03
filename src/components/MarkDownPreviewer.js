import React from 'react';
import marked from 'marked';
import {Helmet} from "react-helmet";
import Panel from './Panel';

import '../index.css';

const defaultInput = `# Welcome to my React Markdown Previewer!
## This is a subheading!

Testing a line break
here is the second line

Here's an example of a [link](https://github.com/ravenblack24/markdown-previewer)

This is some _inline_ sample code \`<div>Hello World!</div>\`

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == \"\`\`\`\" && lastLine == \"\`\`\`\") {
    return multiLineCode;
  }
}
\`\`\`

How about some **list items** next:

- List item 1
-- Sub list item
- List item 2

> Look, a block quote!

### Last _but not least_:

![React Logo w/ Text](https://bit.ly/3jrTDTC)`;

export default class MarkDownPreviewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          input: ''
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
      return{__html: marked(this.state.input, {breaks: true})}
    }
  
    render() {
      return (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Markdown Previewer - React.js app</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
          <Panel component={<textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>} title={"Editor"}/>
          <Panel component={<div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />} title={"Previewer"}/>
        </React.Fragment>
      );
    }
  }