import React from 'react'

interface NewsletterIconProps {
  color?: string
}

const NewsletterIcon: React.FC<NewsletterIconProps> = ({
  color = '#8D8885',
}) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.8125 7V11.5C0.8125 12.3438 1.65625 13.1875 2.5 13.1875H11.5C12.3438 13.1875 13.1875 12.3438 13.1875 11.5V7M0.8125 7H3.90625C3.90625 7 4.46875 8.96875 7 8.96875C9.53125 8.96875 10.0938 7 10.0938 7H13.1875M0.8125 7V8.96875M0.8125 7L1.375 4.1875M13.1875 7L12.625 4.1875M5.59375 3.0625H8.40625M5.59375 5.3125H8.40625M3.34375 5.3125V0.8125H10.6562V5.3125'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default NewsletterIcon
