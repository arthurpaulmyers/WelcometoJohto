import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
// Michael copied from that Stack Overflow page. I'm copying from Michael!

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);