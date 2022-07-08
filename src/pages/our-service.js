import React from "react"
import Layout from "../components/layout"
import { CheckIcon, ServiceHero } from "../utils/imgImport"
import { services } from "../utils/staticData"

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
          <div
            className={`row ${(idx + 1) % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div className="col-md-6">
              <img className="service-img" src={service.img} alt="service" />
            </div>
            <div className="col-md-6">
              <h2 className="title">{service.title}</h2>
              <h3 className="subtitle">{service.subtitle}</h3>
              <p className="description">{service.description}</p>
              <ul>
                {service.list.map((item, idx) => (
                  <li key={idx}>
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
  </Layout>
)

export default AboutUs
