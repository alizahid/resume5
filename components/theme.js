import PropTypes from 'prop-types'
import React from 'react'

export const ResumeTheme = ({ className, onChange, theme }) => (
  <div className={className}></div>
)

ResumeTheme.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}
