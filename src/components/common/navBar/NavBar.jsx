import React, { Component } from 'react'
import st from './styles.module.css';
import ts from '../../styles/typography.module.css';

import logo  from '../../../assets/logo.png';
import Button from './button/Button';
export default class NavBar extends Component {
  render() {
    return (
      <div  className={st.navContainer}>
        <div className={st.logo}>
         <img src={logo}/>
        </div>
        <div className={st.menu}>
            <ul className={ts.subtitle}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us </a></li>
                <li><a href="#">Spicial</a></li>
                <li><a href="#">Menue</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">II</a></li>
            </ul>
        </div>
        <Button text={"ــــــ BOOK NOW ــــــ "}/>
      </div>
    )
  }
}
