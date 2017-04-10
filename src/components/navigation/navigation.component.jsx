'use strict'

import React from 'react'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'
import 'materialize-css'
import './navigation.scss'

class Navigation extends React.Component {
  componentDidMount () {
    $(document).ready(function () {
      const wraper = $('.nav-wrapper')
      const home = wraper.find('#home')
      home.removeClass('active')
      wraper.find('.brand-logo').removeClass('active')
      home.dropdown({
        hover: true,
        belowOrigin: true,
        alignment: 'left',
        constrainWidth: false
      })
    })
  }
  render () {
    return (
      <div>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink to='#!'>one</NavLink></li>
          <li className='divider' />
          <li><NavLink to='#!'>two</NavLink></li>
          <li className='divider' />
          <li><NavLink to='#!'>three</NavLink></li>
        </ul>
        <nav>
          <div className='nav-wrapper'>
            <NavLink to='/' className='brand-logo'>Logo</NavLink>
            <ul className='right hide-on-med-and-down'>
              <li><NavLink to='/' className='dropdown-button' id='home' data-activates='dropdown1'>Home<i className='material-icons right'>arrow_drop_down</i></NavLink></li>
              <li><NavLink to='/topics'>Topics</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Navigation
