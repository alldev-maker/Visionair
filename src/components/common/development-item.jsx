import React from "react"

const DevelopmentItem = ({ data }) => (
  <div className="development-item">
    <img className="icon" src={data.icon} alt={data.title} />
    <p className="caption my-4">{data.caption}</p>
    <p className="content">{data.content}</p>
  </div>
)

export default DevelopmentItem
