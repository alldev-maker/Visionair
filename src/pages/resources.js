import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResourceItem from "../components/common/resource-item"

const Resources = ({ data }) => {
  const resourceList = data.allPrismicResource.nodes
  const tags = data.allPrismicTag.nodes
  return (
    <Layout>
      <Seo title="Resource Page" />
      <section className="container">
        <h2 className="title mt-5">Resources</h2>
        <div className="my-5 row">
          {resourceList.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <ResourceItem resource={item} tags={tags} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Resources

export const query = graphql`
  query Resources {
    allPrismicResource {
      nodes {
        data {
          header_image {
            gatsbyImageData
          }
          content {
            text
          }
          author_name
          author_avatar {
            url
          }
          reading_time
          title
          tags {
            tag {
              id
            }
          }
        }
        url
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
