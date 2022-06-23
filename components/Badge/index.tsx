import React from 'react'
import s from './Badge.module.scss'

interface BadgeProps {
  children: React.ReactNode,
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}

export default Badge