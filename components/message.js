import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const Message = ({ className, message, type = 'message' }) => (
  <div
    className={clsx(
      'rounded-lg p-4 text-medium text-white',
      type === 'success'
        ? 'bg-emerald-500'
        : type === 'error'
        ? 'bg-rose-500'
        : 'bg-lightBlue-500',
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
