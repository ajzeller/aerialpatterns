import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 48px 24px 24px 24px;
`

const ImagesGrid = ( {data} ) => {

  return(
    <GridContainer>
      {data.images.gallery.map(item => (<Img fluid={item.mainImage.asset.fluid} />))}
    </GridContainer>
  )
}

export default ImagesGrid