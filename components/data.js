import clsx from 'clsx'
import update from 'immutability-helper'
import PropTypes from 'prop-types'
import React from 'react'

export const ResumeData = ({ className, data, onChange }) => (
  <div className={clsx('resume-data', className)}>
    <div>
      <h2>Personal</h2>

      <label>
        <span>Title</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                personal: {
                  title: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="Ali Zahid"
          type="text"
          value={data.personal.title}
        />
      </label>

      <label>
        <span>Subtitle</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                personal: {
                  subtitle: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="Product Designer"
          type="text"
          value={data.personal.subtitle}
        />
      </label>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-4">
      <h2>Contact</h2>

      <label>
        <span>Email</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  email: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="ali@resume5.com"
          type="text"
          value={data.contact.email}
        />
      </label>

      <label>
        <span>Phone</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  phone: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="+971 55 123 1234"
          type="text"
          value={data.contact.phone}
        />
      </label>

      <label>
        <span>LinkedIn</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  linkedIn: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="https://www.linkedin.com/in/alizahid"
          type="text"
          value={data.contact.linkedIn}
        />
      </label>

      <label>
        <span>Twitter</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  twitter: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="https://twitter.com/alizahid0"
          type="text"
          value={data.contact.twitter}
        />
      </label>

      <label>
        <span>GitHub</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  github: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="https://github.com/alizahid"
          type="text"
          value={data.contact.github}
        />
      </label>

      <label>
        <span>Dribbble</span>
        <input
          onChange={(event) =>
            onChange(
              update(data, {
                contact: {
                  dribbble: {
                    $set: event.target.value
                  }
                }
              })
            )
          }
          placeholder="https://dribbble.com/alizahid"
          type="text"
          value={data.contact.dribbble}
        />
      </label>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between">
        <h2>Education</h2>

        <a
          className="font-medium"
          href="#add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                education: {
                  $unshift: {
                    degree: '',
                    from: null,
                    school: '',
                    to: null
                  }
                }
              })
            )
          }}>
          Add
        </a>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between">
        <h2>Experience</h2>

        <a
          className="font-medium"
          href="#add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                experience: {
                  $unshift: {
                    company: '',
                    description: '',
                    from: null,
                    position: '',
                    to: null
                  }
                }
              })
            )
          }}>
          Add
        </a>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between">
        <h2>Skills</h2>

        <a
          className="font-medium"
          href="#add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                skills: {
                  $unshift: {
                    data: null,
                    description: '',
                    type: 'line'
                  }
                }
              })
            )
          }}>
          Add
        </a>
      </div>
    </div>
  </div>
)

ResumeData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
