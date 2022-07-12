import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="not-found">
      <div className="container">
        <h1 className="not-found__title">404...</h1>
        <p className="not-found__label">
          This is not the page you’re looking for
        </p>
        <p className="not-found__text">
          Please, check our{" "}
          <Link className="not-found__link" to="/">
            main page
          </Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
