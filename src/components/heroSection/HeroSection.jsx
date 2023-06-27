import React, { Component } from 'react'
import st from './HeroSection.module.css'
import tp from '../styles/typography.module.css'
import NavBar from '../common/navBar/NavBar'
import Button from '../common/navBar/button/Button'
export default class HeroSection extends Component {
  render() {
    return (
      <div className={st.section}>
       <NavBar/> 
       <main >
        <div className={tp.hero}>
          Welcome To <br></br>
            Golden View Dine 
        </div>
        <p className={tp.subtitle}>Explore the authentic vegan dishes with your friends and family</p>
        <Button text={"Read more "}  type={"primary"}/>
       </main>
      </div>
    )
  }
}
