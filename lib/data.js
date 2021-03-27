import { parseISO } from 'date-fns'

export const contactTypes = [
  'Website',
  'Email',
  'Phone',
  'LinkedIn',
  'Twitter',
  'GitHub',
  'Dribbble',
  'Behance'
]

export const getPlaceholder = (type) => {
  switch (type) {
    case 'contact.Website':
      return 'https://alizahid.dev'

    case 'contact.Email':
      return 'ali@resume5.com'

    case 'contact.Phone':
      return '+971 55 123 1234'

    case 'contact.LinkedIn':
      return 'https://www.linkedin.com/in/alizahid'

    case 'contact.Twitter':
      return 'https://twitter.com/alizahid0'

    case 'contact.GitHub':
      return 'https://github.com/alizahid'

    case 'contact.Dribbble':
      return 'https://dribbble.com/alizahid'

    case 'contact.Behance':
      return 'https://www.behance.net/alizahid3'

    default:
      return ''
  }
}

export const parseDate = (date) => {
  if (!date) {
    return new Date()
  }

  if (typeof date === 'string') {
    return parseISO(date)
  }

  return date
}
