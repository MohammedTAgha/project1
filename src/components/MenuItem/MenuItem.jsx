import React from 'react'
import st from './MenuItem.module.css'
import { BodyText, L, SmallText } from '../Typography'
export default function MenuItem({src}) {
  return (
    <div className={st.card}>
        <img src={src} alt='icon'/>
        <div className={st.textContainer}>
          <BodyText color={"#fff"}>
          Lorem ipsum dolor sit amet
          </BodyText>
          <SmallText fontWeight={400}>
          Lorem ipsum dolor sit amet
          </SmallText>
        </div>
        <span className={st.line}>  
        </span>
        <L secondary>
          50.5 RS
        </L>
    </div>
  )
}
