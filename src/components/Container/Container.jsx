import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${props => props.width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.paddingTop || "0"};
  padding-right: ${props => props.paddingRight || "0"};
  padding-bottom: ${props => props.paddingBottom || "0"};
  padding-left: ${props => props.paddingLeft || "0"};
  background-color: ${props => (!props.overlay ? "transparent" : "var(--color-backgrounddark)")};
`;

export default class Container extends Component {
  render() {
    return (
      <StyledContainer {...this.props} />
    );
  }
}