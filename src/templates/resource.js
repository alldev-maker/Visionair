import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import { getTagName } from "../utils/helper"
import { LeftArrow } from "../utils/imgImport"

const Resource = ({ data }) => {
  const resourceData = data.prismicResource.data
  const tags = data.allPrismicTag.nodes

  return (
    <Layout>
      <section className="resource-section container">
        <div className="my-5">
          <Link className="back-to" to="/resources">
            <p>
              <img src={LeftArrow} alt="arrow" />
            </p>
            Back to all pages
          </Link>
        </div>
        <GatsbyImage
          className="resource-image"
          image={getImage(resourceData.header_image)}
          alt={resourceData.title}
        />
        <div className="resource-body">
          <div className="d-flex align-items-center mb-3">
            {resourceData.tags.map((item, idx) => (
              <p className="resource-item__tag" key={idx}>
                {getTagName(tags, item)}
              </p>
            ))}
          </div>
          <h2 className="resource-title">{resourceData.title}</h2>
          <div
            className="resource-content mb-5"
            dangerouslySetInnerHTML={{ __html: resourceData.content.html }}
          />
          <button className="scroll-top" onClick={() => scrollTo("#header")}>
            Top ↑
          </button>
          <Link to="/resources" className="btn-red mt-5">
            Back to pages
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Resource

export const query = graphql`
  query ResourceQuery($id: String) {
    prismicResource(id: { eq: $id }) {
      data {
        header_image {
          gatsbyImageData
        }
        content {
          html
        }
        title
        tags {
          tag {
            id
          }
        }
      }
    }
    allPrismicTag {
      nodes {
        data {
          name
        }
        prismicId
      }
    }
  }
`
