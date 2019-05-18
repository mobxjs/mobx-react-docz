import React from 'react'

export const Emoji: React.FC = ({ children }) => {
  return (
    <span style={{ fontSize: '1.1rem', fontStyle: 'normal' }}>{children}</span>
  )
}
