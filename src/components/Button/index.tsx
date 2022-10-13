import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

export const Button = ({ children, asChild, ...props }: ButtonProps) => {

  const Component = asChild ? Slot : 'button'

  const defaultClasses = React.useMemo(() => `
    py-4 
    px-3 
    rounded 
    bg-cyan-500 
    font-semibold 
    text-black
    text-sm
    w-full
    hover:bg-cyan-300
    transition-colors
  `, [])

  const focusedClasses = React.useMemo(() => `
    focus:ring-2
    focus:ring-white
  `, [])

  const disabledClasses = React.useMemo(() => props.disabled && `
      disabled:bg-gray-400
      disabled:cursor-not-allowed
    `, [props.disabled])

  return (
    <Component
      {...props}
      className={clsx(defaultClasses, focusedClasses, disabledClasses)}
    >
      {children}
    </Component>
  )
}
