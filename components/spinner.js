import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const Spinner = ({ className, light = false }) => (
  <div className={clsx('spinner flex items-center justify-center', className)}>
    <div
      className={clsx(
        'one h-2 w-2 rounded-full',
        light ? 'bg-white' : 'bg-indigo-500'
      )}
    />
    <div
      className={clsx(
        'two h-2 w-2 rounded-full ml-1',
        light ? 'bg-white' : 'bg-indigo-500'
      )}
    />
    <div
      className={clsx(
        'three h-2 w-2 rounded-full ml-1',
        light ? 'bg-white' : 'bg-indigo-500'
      )}
    />
  </div>
)

Spinner.propTypes = {
  className: PropTypes.string,
  light: PropTypes.bool
}
