import React, { Component } from "react";
import { Container } from "../../components";
import strip from "../../assets/strip.png";
import { MainHeading, XL } from "../../components/Typography";
import Button from "../../components/button/Button";
export default class BookingSection extends Component {
  render() {
    return (
      <Container overlay row>
        <img src={strip} />
        <Container width={"fit-content"} rowGap={"24px"}>
          <MainHeading>
            Come join us for a lunch <br />
            this weekend and enjoy
          </MainHeading>
          <XL secondary>FLAT 10% OFF</XL>
          <Button
            type={"primary"}
            text={"Book Table"}
            dm={{ height: 55, width: 177 }}
          />
        </Container>

        <img src={strip} />
      </Container>
    );
  }
}
