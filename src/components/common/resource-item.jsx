import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getTagName } from "../../utils/helper"

const ResourceItem = ({ resource, tags }) => {
  return (
    <div className="resource-item">
      <GatsbyImage
        className="resource-item__image"
        image={getImage(resource.data.header_image)}
        alt={resource.data.title}
      />
      <div className="resource-item__inner">
        <div className="d-flex align-items-center mb-4">
          <img
            className="author-avatar"
            src={resource.data.author_avatar.url}
            alt="author avatar"
          />
          <div>
            <p className="reading-time">
              {resource.data.reading_time} min read
            </p>
            <p className="author-name">{resource.data.author_name}</p>
          </div>
        </div>
        <Link to={resource.url}>
          <h3 className="resource-item__title">{resource.data.title}</h3>
        </Link>
        <p className="resource-item__content">
          {resource.data.content.text.substring(0, 90) + "..."}
        </p>
        <div className="d-flex align-items-center mt-4">
          {resource.data.tags.map((item, idx) => (
            <p className="resource-item__tag" key={idx}>
              {getTagName(tags, item)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourceItem
