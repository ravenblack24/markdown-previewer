import React from 'react';
import Header from './Header';

export default class Panel extends React.Component {
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