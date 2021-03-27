import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const Icon = ({ className, name, onClick, size = 24 }) => (
  <svg
    className={clsx(onClick && 'cursor-pointer', className)}
    fill="currentColor"
    height={size}
    onClick={onClick}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg">
    {icons[name]}
  </svg>
)

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number
}

const icons = {
  add: (
    <g>
      <circle cx="12" cy="12" opacity=".35" r="10" />
      <path d="M17,13H7c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v0C18,12.552,17.552,13,17,13z" />
      <path d="M11,17V7c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v10c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z" />
    </g>
  ),
  delete: (
    <g>
      <path
        d="M15.352,22H8.648c-1.513,0-2.789-1.127-2.977-2.628L4,6h16l-1.672,13.372	C18.141,20.873,16.865,22,15.352,22z"
        opacity=".35"
      />
      <path d="M16,4H8V3c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V4z" />
      <path d="M19,3C18.399,3,5.601,3,5,3C3.895,3,3,3.895,3,5c0,1.105,0.895,2,2,2c0.601,0,13.399,0,14,0c1.105,0,2-0.895,2-2	C21,3.895,20.105,3,19,3z" />
    </g>
  ),
  download: (
    <g>
      <path
        d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
        opacity=".35"
      />
      <path d="M14,13.421v-10c0-1.105-0.895-2-2-2s-2,0.895-2,2v10H14z" />
      <path d="M7.869,12c-0.771,0-1.159,0.93-0.616,1.478l3.856,3.893c0.491,0.495,1.291,0.495,1.782,0l3.856-3.893	C17.29,12.93,16.902,12,16.131,12H7.869z" />
    </g>
  ),
  save: (
    <g>
      <path
        d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h10.757c0.796,0,1.559,0.316,2.121,0.879	l1.243,1.243C20.684,5.684,21,6.447,21,7.243V18C21,19.657,19.657,21,18,21z"
        opacity=".35"
      />
      <path d="M15,3L15,3c-0.552,0-1,0.448-1,1v2c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1V4c0-0.552-0.448-1-1-1H9	C8.448,3,8,3.448,8,4v4c0,0.552,0.448,1,1,1h6c0.552,0,1-0.448,1-1V4C16,3.448,15.552,3,15,3z" />
      <path d="M18,14c0-1.105-0.895-2-2-2H8c-1.105,0-2,0.895-2,2v7h12V14z" />
    </g>
  )
}
