import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Modal } from './modal'

export const Menu = ({ children, className, items, onChange, title }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className={className} onClick={() => setVisible(true)}>
        {children}
      </div>

      <Modal onClose={() => setVisible(false)} visible={visible}>
        <div className="text-2xl font-semibold text-center px-4 pt-4">
          {title}
        </div>

        <div className="mt-4">
          {items.map((item) => (
            <div
              className="cursor-pointer transition-colors hover:bg-teal-500 hover:text-white p-4 text-xl border-gray-100 border-t"
              key={item.value}
              onClick={() => {
                onChange(item)

                setVisible(false)
              }}>
              {item.label}
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
