import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const Modal = ({ children, className, onClose, visible }) => (
  <div
    className={clsx(
      'bg-black  z-20 cursor-[zoom-out] bg-opacity-50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-opacity p-8',
      visible ? '' : 'opacity-0 pointer-events-none'
    )}
    onClick={(event) => {
      if (event.target === event.currentTarget) {
        onClose()
      }
    }}>
    <div
      className={clsx(
        'cursor-default rounded-xl shadow bg-white overflow-y-scroll w-full lg:w-96 max-h-full',
        className
      )}>
      {children}
    </div>
  </div>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
}
