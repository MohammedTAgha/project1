import React, { Component } from "react";
import { Container, MenuItem } from "../../components";
import tp from "../../common/styles/typography.module.css";
import styles from "../../common/styles/styles.module.css";
import styled from "styled-components";
import { MainHeading, Subheading } from "../../components/Typography";

const MenuContainer = styled.div`
  width: 77%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-flow: row wrap;
  row-gap: 32px;
`;
export default class MenuSection extends Component {
  render() {
    return (
      <Container paddingTop={"32px"} paddingBottom={"120px"}>
        <MainHeading secondary>Straight From Kitchen</MainHeading>
        <Subheading>Our Menue</Subheading>

        <MenuContainer>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>  
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>          
        </MenuContainer>
      </Container>
    );
  }
}
