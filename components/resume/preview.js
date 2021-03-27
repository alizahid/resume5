import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const ResumePreview = ({ className, data, theme }) => (
  <div className={clsx('m-4', className)}>
    <div>{theme}</div>
    <pre className="mt-4">{JSON.stringify(data, null, 2)}</pre>
  </div>
)

ResumePreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}
