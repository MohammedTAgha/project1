import React, { Component } from "react";
import { Container } from "../../components";
import tp from "../../common/styles/typography.module.css";
import styles from "../../common/styles/styles.module.css";
import styled from "styled-components";
import { MainHeading, Subheading } from "../../components/Typography";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default class MenuSection extends Component {
  render() {
    return <Container paddingTop={"26px"}>
    <MainHeading secondary  >
        Straight From Kitchen
    </MainHeading>
    <Subheading>
    Our Menue
    </Subheading>
      
        <MenuContainer>

        </MenuContainer>
    </Container>;
  }
}
