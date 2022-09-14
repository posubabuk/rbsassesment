/** @format */

import React, { Component } from "react";
class Errboundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    //logErrorToExampleService(error, info);
    console.log("error: ", error);
  }
  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p> broken</p>;
    }
    return this.props.children;
  }
}
export default Errboundary;
