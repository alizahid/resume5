import clsx from 'clsx'
import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

export const ResumeThemes = ({ className, onChange, theme }) => {
  const themes = [
    'default',
    'blueGray',
    'coolGray',
    'gray',
    'trueGray',
    'warmGray',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'lightBlue',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ]

  return (
    <div className={clsx('flex p-4 overflow-x-scroll text-sm', className)}>
      {themes.map((id) => (
        <div
          className={clsx(
            'whitespace-nowrap ml-4 first:ml-0 p-3 cursor-pointer rounded-lg font-medium transition-colors',
            id === theme
              ? 'bg-teal-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          )}
          key={id}
          onClick={() => onChange(id)}>
          {startCase(id)}
        </div>
      ))}
    </div>
  )
}

ResumeThemes.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}
