import { Link } from "gatsby"
import React from "react"

const CtaSection = ({ data }) => (
  <section className="cta-section">
    <div className="container">
      <h2 className="white">{data.title}</h2>
      <p className="content white">{data.content}</p>
      <Link className="btn-white d-inline-block" to={data.to}>
        {data.btnName}
      </Link>
    </div>
  </section>
)

export default CtaSection
