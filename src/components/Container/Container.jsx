import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class Container extends Component {
  render() {
    const { width, children } = this.props;
    return <StyledContainer width={width}>{children}</StyledContainer>;
  }
}
