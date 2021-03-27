import PropTypes from 'prop-types'
import React from 'react'

export const ResumePreview = ({ className, data, theme }) => (
  <div className={className}>
    <div>{theme}</div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)

ResumePreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}
