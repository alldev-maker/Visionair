import React from "react"

const PlatformItem = ({ data }) => (
  <div className="col-xl-4 col-lg-6">
    <div className="platform-item">
      <img className="platform-item__icon" src={data.icon} alt="platfrom" />
      <p className="caption">{data.caption}</p>
      <p className="content">{data.content}</p>
    </div>
  </div>
)

export default PlatformItem
