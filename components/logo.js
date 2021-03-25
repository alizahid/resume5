import PropTypes from 'prop-types'
import React from 'react'

export const Logo = ({ className, size = 24 }) => (
  <svg
    className={className}
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17,22H7c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h10c1.657,0,3,1.343,3,3v13 C20,20.657,18.657,22,17,22z"
      opacity=".35"
    />
    <path d="M14,1h-4C8.895,1,8,1.895,8,3c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2C16,1.895,15.105,1,14,1z" />
    <circle cx="12" cy="11" r="3" />
    <path d="M15.5,16h-7C7.672,16,7,16.672,7,17.5S7.672,19,8.5,19h7c0.828,0,1.5-0.672,1.5-1.5S16.328,16,15.5,16z" />
  </svg>
)

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
}
