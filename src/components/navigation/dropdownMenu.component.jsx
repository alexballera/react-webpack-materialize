/* Ver funcionalidad y 'Elementos' en
/components/home/home.component.jsx
/navigation/scroll.component.jsx */

'use strict'
import React from 'react'
import { MenuItem } from 'material-ui'
import Scroll from 'react-scroll'
import styles from './styles.jsx'

// Datos
import data from '../../data/navigation.data'

const ScrollLink = Scroll.Link

const DropDownMenu = [
  <MenuItem
    primaryText={data.dropdownMenuScrollSections.item1.title}
    style={styles.menuItem}
    containerElement={
      <ScrollLink
        spy
        smooth
        duration={1000}
        activeClass='active'
        to={data.dropdownMenuScrollSections.item1.url}
        />
      }
    />,
  <MenuItem
    primaryText={data.dropdownMenuScrollSections.item2.title}
    style={styles.menuItem}
    containerElement={
      <ScrollLink
        spy
        smooth
        duration={1000}
        activeClass='active'
        to={data.dropdownMenuScrollSections.item2.url}
        />
      }
    />,
  <MenuItem
    primaryText={data.dropdownMenuScrollSections.item3.title}
    style={styles.menuItem}
    containerElement={
      <ScrollLink
        spy
        smooth
        duration={1000}
        activeClass='active'
        to={data.dropdownMenuScrollSections.item3.url}
        />
      }
    />,
  <MenuItem
    primaryText={data.dropdownMenuScrollSections.item4.title}
    style={styles.menuItem}
    containerElement={
      <ScrollLink
        spy
        smooth
        duration={1000}
        activeClass='active'
        to={data.dropdownMenuScrollSections.item4.url}
        />
      }
    />
]
module.exports = DropDownMenu
