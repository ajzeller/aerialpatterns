import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import { navList, socialList } from './header'

const FooterContainerFullWidth = styled(ContainerFullWidth)`
  background-color: ${ props => props.theme.theme.bg.primary};
  /* background-color: ${ props => props.theme.theme.colors.footerBg}; */
  border-top: 1px solid ${ props => props.theme.theme.border.secondary};

  p{
    margin: 12px 0 0 0;
  }
`

const FooterBody = styled(ContainerBodyWidth)`
  padding: 24px 24px 12px 24px;
  color: ${props => props.theme.theme.text.tertiary};

  p {
    a{
      color: ${props => props.theme.theme.text.tertiary};
      /* border-bottom: 2px solid ${props => props.theme.theme.border.secondary}; */
      
      &:hover {
        border-bottom: 2px solid ${props => props.theme.theme.colors.blue};
      }
    }
  }

`

const FooterGrid = styled(ContainerBodyWidth)`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto 1fr;
  align-items: start;
  justify-items: left;
  /* margin: -20px 0 0 0; */
  /* padding: 24px 24px 12px 24px; */
  /* color: white; */

  a {
    color: ${props => props.theme.theme.text.tertiary};
    /* color: white; */
    text-decoration: none;
    font-size: 1rem;
    /* text-transform: uppercase; */

    &:hover {
      color: ${props => props.theme.theme.text.primary};
    }
  }

  span {
    font-weight: 600;
    margin: 0;
    font-size: 1rem;
  }

  .bold{
    font-weight: 600;
    color: ${props => props.theme.theme.text.primary};
  }

  ul{
    /* display: flex; */
    list-style-type:none;
    margin: 0;
    padding: 0;

    li{
      margin: 10px 10px 0 0px;
      a {
        /* color: ${props => props.theme.theme.text.secondary}; */

        &:hover {
          color: ${props => props.theme.theme.text.primary};
        }
      }
    }
  }

  @media (min-width: 401px) and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px){
    grid-template-columns: 1fr;
  }
`

const Social = styled.div`
  height: 100%;
  justify-self: right;
  display: grid;
  justify-items: right;
  align-content: space-between;

  p{
    text-align: right;
  }

  @media (max-width: 600px){
    justify-self: left;
    justify-items: left;

    p{
      text-align: left;
    }
  }
`


const Footer = ( { logoText, projects } ) => {
  const linksList = (<ul>
    <li>
      <Link to='/about'>About</Link>
    </li>
  </ul>)

  return(
    <FooterContainerFullWidth>
      <FooterBody>
        <FooterGrid>
          <div>
            <Link to='/'>
              <span className='bold' >Aerial Patterns</span>
            </Link>
            {linksList}
          </div>

          <Social>
            {socialList}
            <div>
              <p>
                Google <a href='https://policies.google.com/privacy' target="_blank" rel="noopener">Privacy Policy </a> 
                and <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.
              </p>
              <p>
                © 2020 Andrew Zeller
              </p>
            </div>
          </Social>
          
        </FooterGrid>

      </FooterBody>
    </FooterContainerFullWidth>
  )

}

export default Footer