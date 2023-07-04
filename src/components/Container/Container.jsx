import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
`;

export default class Container extends Component {
  render() {
    const {
      width,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      children,
    } = this.props;
    return (
      <StyledContainer
        width={width}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
      >
        {children}
      </StyledContainer>
    );
  }
}
