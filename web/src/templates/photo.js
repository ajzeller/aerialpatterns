import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'gatsby'

const MainContainer = styled(ContainerBodyWidth)`
  padding: 0px 24px 24px 24px;
`

const StyledImg = styled(Img)`
  max-width: 700px;
  margin: 0px auto;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.theme.text.primary};
  }

  svg {
    margin: 0 12px 0 0;
  }
`

export const query = graphql`
  query PhotoTemplateQuery($id: String!) {
    photoPage: sanityGalleryImage(id: {eq: $id}) {
      id
      publishedAt
      title
      mainImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const PhotoTemplate = props => {
  const {data, errors} = props
  const photo = data && data.photoPage
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {photo && <SEO title={photo.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <MainContainer>
        <Title>
          <Link to='/'>
            <IoMdArrowBack size='24px' />
          </Link>

          <h1>{photo.title}</h1>
        </Title>
        <StyledImg fluid={photo.mainImage.asset.fluid} />
      </MainContainer>

      {/* {project && <Project {...project} />} */}
    </Layout>
  )
}

export default PhotoTemplate
