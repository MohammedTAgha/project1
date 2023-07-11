import React from "react";
import { Container, FetureCard } from "../../components";
import c1 from "../../assets/chef1.png";
export default function Features() {
  return (
    <Container overlay  row justifyContent="space-around"  paddingBottom = "3.5rem" paddingTop = "3.5rem">
      <FetureCard icon={c1} title="+10" text="renowed chefs" />
      <FetureCard icon={c1} title="+10" text="renowed chefs" />
      <FetureCard icon={c1} title="+10" text="renowed chefs" />
    </Container>
  );
}
