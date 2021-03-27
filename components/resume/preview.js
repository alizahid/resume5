import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const ResumePreview = ({ className, data, theme }) => (
  <div className={clsx('m-4', className)}>
    <div className="flex items-center">
      <span className="font-medium">Theme</span>
      <span className="ml-4 bg-teal-500 text-white rounded-xl p-2">
        {theme}
      </span>
    </div>
    <pre className="text-sm leading-relaxed mt-4">
      {JSON.stringify(data, null, 2)}
    </pre>
  </div>
)

ResumePreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}
