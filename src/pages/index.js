import { Link } from "gatsby"
import * as React from "react"
import CtaSection from "../components/call-to-action"
import DevelopmentItem from "../components/common/development-item"
import PlatformItem from "../components/common/platform-item"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  cta_data1,
  deserves,
  platforms,
  servings,
  visionair_values,
} from "../utils/staticData"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="home-hero">
      <div className="container">
        <div className="hero-body">
          <h1 className="hero-title">
            The <span className="red">co-pilot</span>
            <br />
            <span className="underline">of your digital business</span>
          </h1>
          <p className="hero-text">
            Our mission is to make your e-commerce essential
          </p>
          <button className="btn-red">Start project</button>
        </div>
      </div>
    </section>
    <section className="deserve-section container">
      <h2 className="title">
        Give your e-commerce the development it deserves
      </h2>
      <p className="mt-5">
        Our long-term 360° support makes us an accelerator of your digital
        growth
      </p>
      <div className="d-flex align-items-center py-5 my-3">
        <button className="btn-red">Learn More</button>
        <div className="divider ms-5"></div>
      </div>
      <div className="row">
        {deserves.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <DevelopmentItem data={item} />
          </div>
        ))}
      </div>
    </section>
    <section className="serving-section">
      <div className="container">
        <h2 className="title">A team of experts serving your growth</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="mb-4">
              Visionair has several years of experience in the e-commerce trade
              and an expertise in the best practices and digital technologies.
              Our team supports you to develop your project and give it the
              brand image it deserves.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              From creation to development, we help you at each phase of growth
              and provide you with regular reports. More than partners, we are
              the co-pilots of your digital growth.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center py-5 my-3">
          <button className="btn-red">Learn More</button>
          <div className="divider ms-5"></div>
        </div>
        <div className="row">
          {servings.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <DevelopmentItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaSection data={cta_data1} />
    <section className="platform-section">
      <div className="container">
        <h2>
          Visionair, an agency made of experts with the leading e-commerce
          platforms
        </h2>
        <div className="row">
          {platforms.map((item, idx) => (
            <PlatformItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
    <section className="values-section">
      <div className="container">
        <h2 className="title">Visionair values</h2>
        <div className="row mt-5 pt-3">
          {visionair_values.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="value-item">
                <p className="caption">{item.caption}</p>
                <p className="content">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="row">
          {visionair_values.map((item, idx) => (
            <div className="col-6 col-md-4" key={idx}>
              <div className="value-info">
                <p className="value-info__number">{item.number}</p>
                <p className="value-info__label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="btn-red" to="/">
          Let's talk about your project!
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage
