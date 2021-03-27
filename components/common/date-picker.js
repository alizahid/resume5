import clsx from 'clsx'
import { addDays, addMonths, addYears, format } from 'date-fns'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Modal } from './modal'

export const DatePicker = ({ className, onChange, placeholder, value }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div
        className={clsx(
          'bg-gray-100 transition-shadow ring-teal-500 hover:ring-2 rounded-lg p-3 cursor-pointer',
          className
        )}
        onClick={() => setVisible(true)}>
        {value ? format(value, 'MMM d, y') : placeholder}
      </div>

      <Modal
        className="p-8"
        onClose={() => setVisible(false)}
        visible={visible}>
        {placeholder && (
          <div className="text-2xl font-semibold text-center">
            {placeholder}
          </div>
        )}

        <div className="flex items-center justify-center mt-4 font-mono">
          {[-1, 0, 1].map((index) => {
            const date = addYears(value, index)

            return (
              <div
                className={clsx(
                  'bg-emerald-600 p-3 cursor-pointer',
                  index < 0
                    ? 'bg-opacity-40 rounded-l-lg'
                    : index === 0
                    ? 'bg-opacity-100 text-white'
                    : 'bg-opacity-80 text-white rounded-r-lg'
                )}
                key={`year-${index}`}
                onClick={() => onChange(date)}>
                {format(date, 'y')}
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center mt-4 font-mono">
          {[-1, 0, 1].map((index) => {
            const date = addMonths(value, index)

            return (
              <div
                className={clsx(
                  'bg-teal-600 p-3 cursor-pointer',
                  index < 0
                    ? 'bg-opacity-40 rounded-l-lg'
                    : index === 0
                    ? 'bg-opacity-100 text-white'
                    : 'bg-opacity-80 text-white rounded-r-lg'
                )}
                key={`month-${index}`}
                onClick={() => onChange(date)}>
                {format(date, 'MMMM')}
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center mt-4 font-mono">
          {[-1, 0, 1].map((index) => {
            const date = addDays(value, index)

            return (
              <div
                className={clsx(
                  'bg-green-600 p-3 cursor-pointer',
                  index < 0
                    ? 'bg-opacity-40 rounded-l-lg'
                    : index === 0
                    ? 'bg-opacity-100 text-white'
                    : 'bg-opacity-80 text-white rounded-r-lg'
                )}
                key={`day-${index}`}
                onClick={() => onChange(date)}>
                {format(date, 'd')}
              </div>
            )
          })}
        </div>
      </Modal>
    </>
  )
}

DatePicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.object.isRequired
}
