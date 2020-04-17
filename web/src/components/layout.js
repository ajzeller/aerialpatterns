import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import Provider from './provider'

import '../styles/layout.css'
import styles from './layout.module.css'
import '../styles/styles.scss'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <Provider>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <Footer />
  </Provider>
)

export default Layout
