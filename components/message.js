import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const Message = ({ className, message, type = 'message' }) => (
  <div
    className={clsx(
      'p-4 text-medium text-lg text-white',
      type === 'success'
        ? 'bg-emerald-600'
        : type === 'error'
        ? 'bg-rose-600'
        : 'bg-lightBlue-600',
      className
    )}>
    {message}
  </div>
)

Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['message', 'error', 'success'])
}
