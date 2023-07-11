import React from 'react'
import Container from '../Container/Container'
import { XXL, Subtitle } from '../Typography'

export default function FetureCard({icon , text , title}) {
  const imageStyle ={
    width :"5.3rem",
  }
  return (
   <Container  row columnGap="4px" width="fit-content" >
        <img src={icon} />
        <Container>
        <XXL secondary >
        {title}
        </XXL>
        <Subtitle>
        {text}
        </Subtitle>
        </Container>
   </Container>
  )
}
