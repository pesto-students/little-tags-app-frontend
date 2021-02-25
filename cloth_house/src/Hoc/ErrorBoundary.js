import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errors: "", errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ errors: error, errorInfo: info });
  }

  errorDisplay=()=>{
    const errorDivStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 0px 10px 10px",
      color: "#FF7574",
      width: "100%"
    };

    return (
      <div style={errorDivStyle}>
        <h2 className="centered" style={{ fontSize: "16px" }}>
          Whoops! Something went wrong. We will be looking into this.
        </h2>
      </div>
    );

  }

  render() {
  
    if (this.state.hasError) {
      const errorInfo = _.cloneDeep(this.state.errorInfo);
      if (typeof errorInfo === "object" && errorInfo !== null) {
        console.log(
          "ComponentName",
          errorInfo.componentStack
            .split("in")[1]
            .split("(")[0]
            .replace(/^\s+|\s+$/g, "")
        );
      }

      
    }
    return this.state.hasError ?this.errorDisplay(): this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ErrorBoundary;
