import clsx from 'clsx'
import update from 'immutability-helper'
import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { contactTypes, getPlaceholder, parseDate } from '../../lib/data'
import { DatePicker } from '../common/date-picker'
import { Icon } from '../common/icon'
import { Menu } from '../common/menu'

export const ResumeData = ({ className, data, onChange }) => (
  <div className={clsx('resume-data', className)}>
    <div className="p-4">
      <h2>Personal</h2>

      <label className="mt-4">
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
          value={data.personal.title ?? ''}
        />
      </label>

      <label className="mt-4">
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
          value={data.personal.subtitle ?? ''}
        />
      </label>
    </div>

    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h2>Contact</h2>

        <Menu
          className="font-medium cursor-pointer text-emerald-500"
          items={contactTypes
            .filter((value) => !Object.keys(data.contact).includes(value))
            .map((value) => ({
              label: value,
              value
            }))}
          onChange={({ value }) =>
            onChange(
              update(data, {
                contact: {
                  [value]: {
                    $set: ''
                  }
                }
              })
            )
          }>
          <Icon name="add" />
        </Menu>
      </div>

      {Object.entries(data.contact).map(([key, value]) => (
        <div className="flex items-center mt-4" key={key}>
          <Icon
            className="text-rose-500 mr-4"
            name="delete"
            onClick={() =>
              onChange(
                update(data, {
                  contact: {
                    $unset: [key]
                  }
                })
              )
            }
          />

          <label className="flex-1">
            <span>{key}</span>
            <input
              onChange={(event) =>
                onChange(
                  update(data, {
                    contact: {
                      [key]: {
                        $set: event.target.value
                      }
                    }
                  })
                )
              }
              placeholder={getPlaceholder(`contact.${key}`)}
              type="text"
              value={value}
            />
          </label>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h2>Education</h2>

        <Icon
          className="text-emerald-500"
          name="add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                education: {
                  $push: [
                    {
                      degree: '',
                      from: null,
                      school: '',
                      to: null
                    }
                  ]
                }
              })
            )
          }}
        />
      </div>

      <div>
        {data.education.map((education, index) => (
          <div
            className="flex items-center mt-4 pt-4 border-gray-200 border-t first:pt-0 first:border-t-0"
            key={`education-${index}`}>
            <Icon
              className="text-rose-500 mr-4"
              name="delete"
              onClick={() =>
                onChange(
                  update(data, {
                    education: {
                      $splice: [[index, 1]]
                    }
                  })
                )
              }
            />

            <div className="flex-1">
              <label>
                <span>School</span>
                <input
                  onChange={(event) =>
                    onChange(
                      update(data, {
                        education: {
                          [index]: {
                            school: {
                              $set: event.target.value
                            }
                          }
                        }
                      })
                    )
                  }
                  placeholder="School"
                  type="text"
                  value={education.school}
                />
              </label>

              <label className="mt-4">
                <span>Degree</span>
                <input
                  onChange={(event) =>
                    onChange(
                      update(data, {
                        education: {
                          [index]: {
                            degree: {
                              $set: event.target.value
                            }
                          }
                        }
                      })
                    )
                  }
                  placeholder="Degree"
                  type="text"
                  value={education.degree}
                />
              </label>

              <div className="flex mt-4">
                <label className="flex-1">
                  <span>From</span>
                  <DatePicker
                    onChange={(date) =>
                      onChange(
                        update(data, {
                          education: {
                            [index]: {
                              from: {
                                $set: date
                              }
                            }
                          }
                        })
                      )
                    }
                    placeholder="From"
                    value={parseDate(education.from)}
                  />
                </label>

                <label className="flex-1 ml-4">
                  <span>To</span>
                  <DatePicker
                    onChange={(date) =>
                      onChange(
                        update(data, {
                          education: {
                            [index]: {
                              to: {
                                $set: date
                              }
                            }
                          }
                        })
                      )
                    }
                    placeholder="From"
                    value={parseDate(education.to)}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h2>Experience</h2>

        <Icon
          className="text-emerald-500"
          name="add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                experience: {
                  $push: [
                    {
                      company: '',
                      description: '',
                      from: null,
                      position: '',
                      to: null
                    }
                  ]
                }
              })
            )
          }}
        />
      </div>

      {data.experience.map((experience, index) => (
        <div
          className="flex items-center mt-4 pt-4 border-gray-200 border-t first:pt-0 first:border-t-0"
          key={`experience-${index}`}>
          <Icon
            className="text-rose-500 mr-4"
            name="delete"
            onClick={() =>
              onChange(
                update(data, {
                  experience: {
                    $splice: [[index, 1]]
                  }
                })
              )
            }
          />

          <div className="flex-1">
            <label>
              <span>Company</span>
              <input
                onChange={(event) =>
                  onChange(
                    update(data, {
                      experience: {
                        [index]: {
                          company: {
                            $set: event.target.value
                          }
                        }
                      }
                    })
                  )
                }
                placeholder="Company"
                type="text"
                value={experience.company}
              />
            </label>

            <label className="mt-4">
              <span>Position</span>
              <input
                onChange={(event) =>
                  onChange(
                    update(data, {
                      experience: {
                        [index]: {
                          position: {
                            $set: event.target.value
                          }
                        }
                      }
                    })
                  )
                }
                placeholder="Position"
                type="text"
                value={experience.position}
              />
            </label>

            <label className="mt-4">
              <span>Description</span>
              <textarea
                className="block"
                onChange={(event) =>
                  onChange(
                    update(data, {
                      experience: {
                        [index]: {
                          description: {
                            $set: event.target.value
                          }
                        }
                      }
                    })
                  )
                }
                placeholder={`- I was in charge of something\n- We increased our sales by 200%`}
                type="text"
                value={experience.description}
              />
            </label>

            <div className="flex mt-4">
              <label className="flex-1">
                <span>From</span>
                <DatePicker
                  onChange={(date) =>
                    onChange(
                      update(data, {
                        experience: {
                          [index]: {
                            from: {
                              $set: date
                            }
                          }
                        }
                      })
                    )
                  }
                  placeholder="From"
                  value={parseDate(experience.from)}
                />
              </label>

              <label className="flex-1 ml-4">
                <span>To</span>
                <DatePicker
                  onChange={(date) =>
                    onChange(
                      update(data, {
                        experience: {
                          [index]: {
                            to: {
                              $set: date
                            }
                          }
                        }
                      })
                    )
                  }
                  placeholder="From"
                  value={parseDate(experience.to)}
                />
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h2>Skills</h2>

        <Icon
          className="text-emerald-500"
          name="add"
          onClick={(event) => {
            event.preventDefault()

            onChange(
              update(data, {
                skills: {
                  $push: [
                    {
                      description: '',
                      type: 'line',
                      years: 0
                    }
                  ]
                }
              })
            )
          }}
        />
      </div>

      {data.skills.map((skill, index) => (
        <div className="flex items-center mt-4" key={`skill-${index}`}>
          <Icon
            className="text-rose-500 mr-4"
            name="delete"
            onClick={() =>
              onChange(
                update(data, {
                  skills: {
                    $splice: [[index, 1]]
                  }
                })
              )
            }
          />

          <div className="flex flex-1">
            <input
              onChange={(event) =>
                onChange(
                  update(data, {
                    skills: {
                      [index]: {
                        description: {
                          $set: event.target.value
                        }
                      }
                    }
                  })
                )
              }
              placeholder={
                skill.type === 'line' ? 'I made cool stuff' : 'Microsoft Office'
              }
              type="text"
              value={skill.description}
            />

            {skill.type === 'years' && (
              <input
                className="max-w-[4rem] ml-4"
                onChange={(event) =>
                  onChange(
                    update(data, {
                      skills: {
                        [index]: {
                          years: {
                            $set: Number(event.target.value.replace(/\D+/, ''))
                          }
                        }
                      }
                    })
                  )
                }
                placeholder="2"
                type="number"
                value={String(skill.years)}
              />
            )}

            <Menu
              className="ml-4 flex items-center p-3 cursor-pointer bg-gray-100 rounded-lg ring-teal-500 hover:ring-2"
              items={[
                {
                  label: 'Line',
                  value: 'line'
                },
                {
                  label: 'Years',
                  value: 'years'
                }
              ]}
              onChange={({ value }) =>
                onChange(
                  update(data, {
                    skills: {
                      [index]: {
                        type: {
                          $set: value
                        }
                      }
                    }
                  })
                )
              }>
              {startCase(skill.type)}
              <span className="ml-2 text-xl leading-none">&#9662;</span>
            </Menu>
          </div>
        </div>
      ))}
    </div>
  </div>
)

ResumeData.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
