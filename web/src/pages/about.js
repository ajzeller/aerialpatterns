import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Img from "gatsby-image"
import styled from "styled-components"
import ImagesGrid from '../components/imagesGrid'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'

const AboutContainer = styled(ContainerBodyWidth)`
  padding: 24px;
`

export const query = graphql`
  query AboutPageQuery {
    images: sanitySiteSettings {
      gallery {
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }

    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  console.log(data.images)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <AboutContainer>
        <h1>About</h1>
        <p>
          Hey there, thanks for checking out Aerial Patterns. 
          Aerial patterns is a drone photography project by myself, <a href='https://zeller.io' target="_blank">Andrew Zeller</a>. 
          This site documents my search for unique patterns on the ground seen from the sky.
        </p>

        <p>
          All photos are shot by myself with my DJI Mavic Pro drone, usually from an altitude of about 400 ft. I use Adobe Lightroom for post-processing.
        </p>

        <p>
          I built this site with <a href='https://www.gatsbyjs.org/' target="_blank">Gatsby.js</a> and <a href='https://www.sanity.io/' target="_blank">Sanity.io (CMS)</a>. 
          You can find the source code on <a href='https://github.com/ajzeller/aerialpatterns' target="_blank">Github</a>.
        </p>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
