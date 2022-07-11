import React from "react"
import CtaSection from "../components/call-to-action"
import DevelopmentItem from "../components/common/development-item"
import Layout from "../components/layout"
import { AboutHero } from "../utils/imgImport"
import { cta_data2, servings } from "../utils/staticData"

const AboutUs = () => (
  <Layout>
    <section className="container">
      <div className="about-hero">
        <div>
          <h1 className="hero-title">
            The co-pilot of your
            <br />
            <span className="underline">e-commerce business</span>
          </h1>
          <p className="hero-text">
            Experts with complementary skills serving your 360° digital
            development
          </p>
          <button className="btn-red">Start project</button>
        </div>
        <img src={AboutHero} alt="about hero" />
      </div>
    </section>
    <section className="story-section">
      <div className="container">
        <h2 className="title">The Visionair’s story</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="mb-4">
              Visionair is first and foremost a pool of experts, an innovative
              approach and an overflowing creativity to highlight the stories
              and values of each company we work with.
              <br />
              <br />
              Our intuition, our ability to anticipate and our foolproof
              imagination logically gave Visionair its name. Because achieving a
              vision requires clear ideas, action and a strong determination,
              the name Visionair was an obvious choice.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Our experience has allowed us to identify recurring needs and our
              desire to give e-commerce projects the scope they deserve quickly
              became our spearhead.
              <br />
              <br />
              Visionair is therefore a team of creative and strategic people who
              are constantly on the lookout for the master stroke that will help
              you make a difference.
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center py-5 my-3">
          <button className="btn-red">Learn More</button>
        </div>
      </div>
    </section>
    <section className="team-section">
      <div className="container">
        <h1>The Visionair’s team</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="mb-4">
              Visionair has several years of experience in the e-commerce trade
              and an expertise in best practices and digital technologies. Our
              team accompanies you to grow your project and give it the brand
              image it deserves. Strategy, design, development, marketing,
              data...
              <br />
              <br />
              We are present during each phase and we guarantee regular reports
              on our progress as well as the means implemented over the weeks.
              More than partners, we are the co-pilots of your digital growth.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Visionair was founded by Morgan. His technical approach and his
              knowledge of business development have enabled him to find
              innovative solutions and to meet the needs in fields such as
              luxury, retail and marketplaces. Liva and Victor were quickly
              seduced by the adventure to add their marketing and design touch.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="team-section container">
      <h2 className="title mb-5 pb-3">Our team of experts :</h2>
      <div className="row">
        {servings.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <DevelopmentItem data={item} />
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between py-5">
        <div className="divider me-5"></div>
        <button className="btn-red">Let's get in touch!</button>
        <div className="divider ms-5"></div>
      </div>
    </section>
    <CtaSection data={cta_data2} />
  </Layout>
)

export default AboutUs
