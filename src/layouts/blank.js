import React from "react";
import { Row } from "antd";
export default class Admin extends React.Component {
  render() {
    return <Row className="container">{this.props.children}</Row>;
  }
}
