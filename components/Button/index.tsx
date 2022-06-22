import React from 'react'
import s from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode,
  variant: "outlined" | "contained"
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <button
      className={clsx(s.root, s[variant])}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button