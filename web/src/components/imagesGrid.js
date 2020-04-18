import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import Img from "gatsby-image"

const GridContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
  margin: 48px 24px 24px 24px;

  /* @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  } */
`

const ImagesGrid = ( {data} ) => {

  return(
    <GridContainer>
      {data.images.gallery.map(item => (
        <Link to={item.slug.current}>
          <Img fluid={item.mainImage.asset.fluid} />
        </Link>
      ))}
    </GridContainer>
  )
}

export default ImagesGrid