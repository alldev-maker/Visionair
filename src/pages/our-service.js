import React from "react"
import DevelopmentItem from "../components/common/development-item"
import Layout from "../components/layout"
import { CheckIcon, ServiceHero, Touch } from "../utils/imgImport"
import { benefits, services } from "../utils/staticData"

const AboutUs = () => (
  <Layout>
    <section className="container">
      <div className="about-hero">
        <div>
          <h1 className="hero-title">
            Support you
            <br />
            <span className="underline">beyond e-commerce</span>
          </h1>
          <p className="hero-text mb-4">
            Our team of experts in the e-commerce trade helps you develop a
            commercial strategy adapted to the needs of buyers and a platform
            strategy adapted to your growth objectives. Our mission? To set you
            apart with a unique experience that reflects your values
          </p>
        </div>
        <img src={ServiceHero} alt="about hero" />
      </div>
    </section>
    <section className="our-services">
      <div className="container">
        <h1 className="hero-title">
          <span className="underline">Our services</span>
        </h1>
        <p className="content">
          In order to help you in the development of your e-commerce, our
          approach and our expertise allow us to be present in different areas.
          From the implementation of the specifications to the launch of your
          marketing campaigns, we are present at each stage of development of
          your e-commerce project.
        </p>
      </div>
    </section>
    {services.map((service, idx) => (
      <section
        className={`service-section ${(idx + 1) % 2 === 0 ? "black" : ""}`}
        key={idx}
      >
        <div className="container">
          <div className={`service ${(idx + 1) % 2 === 0 ? "reverse" : ""}`}>
            <div className="left">
              <img className="service-img" src={service.img} alt="service" />
            </div>
            <div className="right">
              <h2 className="title">{service.title}</h2>
              <h3 className="subtitle">{service.subtitle}</h3>
              <p className="description">{service.description}</p>
              <ul>
                {service.list.map((item, idx) => (
                  <li className="service-item" key={idx}>
                    <img src={CheckIcon} alt="check icon" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ))}
    <section className="service-section">
      <div className="container">
        <div className="service touch">
          <div className="right">
            <h2 className="title-underline">Visionair's touch</h2>
            <h3 className="subtitle">
              Visionair, the co-pilot of your digital business
            </h3>
            <p className="description">
              For several years, we have been supporting e-commerce sites in
              their deployment. Our team is composed of multidisciplinary
              experts whose mastery in terms of UI, UX, marketing and data has
              enabled us to carry out projects on an international scale. As a
              partner or within Visionair, our talents work together e-commerce
              take off and support you towards your new challenges.
            </p>
            <button className="btn-red mt-3 mb-5">Learn More</button>
          </div>
          <div className="left">
            <img className="service-img" src={Touch} alt="service" />
          </div>
        </div>
      </div>
    </section>

    <section className="benefits-section">
      <div className="container">
        <div className="row">
          {benefits.map((item, idx) => (
            <div
              className="col-md-4 d-flex flex-column justify-content-between"
              key={idx}
            >
              <h2 className="benefit-title">{item.title}</h2>
              <DevelopmentItem data={item} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="btn-red">I want to know more</button>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutUs
