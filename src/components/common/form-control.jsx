import React from "react"

export const FormInput = props => {
  const { error, ...others } = props
  const cls = error ? "form-control error" : "form-control"
  return (
    <div className="form-group">
      <input className={cls} {...others} />
      {error && <span className="errorsapn">{error}</span>}
    </div>
  )
}

export const FormTextarea = props => {
  const { ...others } = props
  return (
    <div className="form-group">
      <textarea className="form-control text-area" {...others} />
    </div>
  )
}
