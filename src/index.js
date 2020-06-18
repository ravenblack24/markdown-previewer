import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import marked from 'marked';

class MarkDownPreviewer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section--editor">
          <header>
            <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
            <h1>Editor</h1>
            <FontAwesomeIcon icon={faWindowMaximize} className="icon icon-action" />
          </header>
    <textarea id="editor"></textarea>
        </section>
        <section className="section--preview">
          <header>
            <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
            <h1>Previewer</h1>
            <FontAwesomeIcon icon={faWindowMaximize} className="icon icon-action" />
          </header>
          <div id="preview">{marked("# hello there")}</div>
        </section>
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

