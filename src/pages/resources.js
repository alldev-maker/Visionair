import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Resources = () => (
  <Layout>
    <section className="container">
      <h2 className="title">Resources</h2>
    </section>
  </Layout>
)

export default Resources

export const query = graphql`
  query Resources {
    allPrismicResource {
      nodes {
        data {
          title
        }
        url
      }
    }
  }
`
