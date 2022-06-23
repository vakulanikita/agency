import React from 'react'
import s from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode,
  variant: "outlined" | "contained",
  paddingX?: number
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  paddingX = 39
}) => {
  return (
    <button
      className={clsx(s.root, s[variant])}
      style={{
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button