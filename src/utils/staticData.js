import {
  Activation,
  Benefit1,
  Benefit2,
  Benefit3,
  Deserve1,
  Deserve2,
  Deserve3,
  Growth1,
  Growth2,
  Growth3,
  Planning,
  Platform1,
  Platform2,
  Platform3,
  Strategy,
} from "./imgImport"

export const nav_menus = [
  {
    name: "About us",
    to: "/about-us",
  },
  {
    name: "Our Services",
    to: "/our-service",
  },
  {
    name: "Resources",
    to: "/resources",
  },
  {
    name: "Contact Us",
    to: "/contact-us",
  },
]

export const deserves = [
  {
    icon: Deserve1,
    caption: "E-Commerce Strategy",
    content:
      "Once we know more about your project and your goals, we set up a strategic roadmap to take your e-business to the next level and make it a reference.",
  },
  {
    icon: Deserve2,
    caption: "Design and development",
    content:
      "Innovation, creativity and adaptability are our watchwords. We develop your eCommerce media with an intuitive UX to grow engagement around your brand.",
  },
  {
    icon: Deserve3,
    caption: "Digital Marketing",
    content:
      "What's better than a customized marketing strategy? We implement follow-ups, adjustments and innovations to take your growth to the next level.",
  },
]

export const servings = [
  {
    icon: Growth1,
    caption: "Digital Marketing",
    content:
      "The strategic vision of your communication and the creation of engaging content has no secrets for us.",
  },
  {
    icon: Growth2,
    caption: "Tech & Delivery department",
    content:
      "Project management and e-commerce development are part of our favorite playground.",
  },
  {
    icon: Growth3,
    caption: "UX Design and Creative",
    content:
      "Do you want to make the user experience more pleasant and optimize the design of your solutions? Challenge accepted!",
  },
]

export const benefits = [
  {
    icon: Benefit1,
    title: "Your project is too good to go unnoticed",
    caption: "Digital Accelerator",
    content:
      "Our long term support allows your digital solution match your vision and reach your goals. From an action plan updated every quarter, our marketing actions and technical solutions allow you to continuously improve your KPIs thanks to e-business best practices",
  },
  {
    icon: Benefit2,
    title: "E-commerce specialists",
    caption: "Dare to settle",
    content:
      "In addition to their knowledge of the E-Commerce market, our team and partners have the skills to implement the most effective and trendy strategies in the field",
  },
  {
    icon: Benefit3,
    title: "Measurable results",
    caption: "Your competitors will envy you!",
    content:
      "The effectiveness of an e-commerce strategy is proven through operational and commercial results. Regular data analysis allows you to adapt your marketing and technical action plan to achieve your goals",
  },
]

export const platforms = [
  {
    icon: Platform1,
    caption: "Shopify",
    content: `Shopify is the leading SaaS ecommerce platform for small and medium-sized B2C businesses. It is ideal for businesses that are just starting out in eCommerce or those with high merchandising and sales volume requirements.
      
    Shopify Plus provides support, technology and strategic solutions.`,
  },
  {
    icon: Platform2,
    caption: "BigCommerce",
    content:
      "Big Commerce is the leading SaaS ecommerce platform for medium to large businesses. It is the fastest growing platform in the IR 1000, designed for organizations looking to accelerate growth.",
  },
  {
    icon: Platform3,
    caption: "Klaviyo",
    content:
      "Klaviyo allows you to manage your email marketing campaigns. Its intuitive dashboard allows you to quickly see your KPIs, their evolution and to have a real time follow-up of your customers. It's the perfect complement to Shopify Plus and BigCommerce.",
  },
]

export const visionair_values = [
  {
    caption: "Responsibility",
    content:
      "The experience of each team member is Visionair's major asset. The result? Tailored-made strategies and a committed team serving your project.",
    number: 10,
    label: "Experts",
  },
  {
    caption: "Humility",
    content:
      "We consider our collaborators and service providers as full members of our company. We value their talents and encourage their autonomy and responsibility.",
    number: 12,
    label: "Years of Experience",
  },
  {
    caption: "Enthusiasm",
    content:
      "What if we let everyone's creativity speak for itself to break the rules and bring out innovative solutions for your e-business?",
    number: 5,
    label: "Ideas per minute",
  },
]

export const cta_data1 = {
  title: "They trust us",
  content:
    "For several years, we have been supporting e-commerce projects on a national and international scale. Our 360 degree service catalog allows us to accelerate the growth of projects through an Agile method",
  btnName: "Learn more",
  to: "/",
}
export const cta_data2 = {
  title: "Would you like to join Visionair?",
  content:
    "You are interested in Visionair's energy and do you want to be part of its growth? If you have a Creative & Design, Technology & Delivery or Marketing & Data profile, we are looking forward to knowing you!",
  btnName: "I'm contacting Visionair",
  to: "/",
}

export const services = [
  {
    title: "Strategy and discovery",
    subtitle: "Knowing you to better take action!",
    description:
      "Before knowing your objectives and your customers, we get to know your DNA. This is how we spot your differentiating factors compared to your competitors. Then comes the personalized strategic phase, taking into account elements such as :",
    list: [
      "An analysis of the best e-commerce practices for conversion",
      "A thorough understanding of the data for the development of an acquisition strategy",
      "The establishment of a budget and detailed plan for your new site, replatforming/migration project",
      "Your customers’ behavior on your Internet site",
      "Your ecommerce site’s technical and functional audit (UX)",
      "The creation of a roadmap after the analysis and prioritization of your needs",
    ],
    img: Strategy,
  },
  {
    title: "Execution and development",
    subtitle: "Planning is good, making a difference is better!",
    description:
      "The development of your e-commerce depends on the implementation of different levers allowing an acquisition in constant growing :",
    list: [
      "A facilitated customer journey (UX & UI)",
      "A functional and technical architecture",
      "The front and back-end development of your solutions",
      "Agile project management, preparation for launch with functional tests",
      "Regular audits for continuous optimization",
    ],
    img: Planning,
  },
  {
    title: "Activation ",
    subtitle: "Always keep in mind your long-term goals!",
    description:
      "A data-driven marketing approach on each step of the purchase journey enable the growth of the your e-commerce site in the best ways. Our digital marketing pillars below allow you to move from project to long-term growth",
    list: [
      "A/B testing and personalisation",
      "Campaign management",
      "Email and segmentation",
      "Content strategy",
    ],
    img: Activation,
  },
]
