import React from "react"
import ContactForm from "../components/contact-form"
import Layout from "../components/layout"
import { ContactHero } from "../utils/imgImport"

const ContactUs = () => (
  <Layout>
    <section className="container contact-section">
      <h2 className="title">Contacts Us</h2>
      <h3 className="subtitle">Do you want to talk to us?</h3>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <ContactForm />
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img
            className="contact-hero__img"
            src={ContactHero}
            alt="contact us"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactUs
