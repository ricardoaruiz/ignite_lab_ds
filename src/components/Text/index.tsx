import React from 'react'

import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export type TextProps = React.PropsWithChildren & {
  size?: 'sm' | 'md' | 'lg',
  asChild?: boolean
  className?: string
}

const sizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-md',
}

export const Text = ({ children, className, size = 'md', asChild }: TextProps) => {

  const Component = asChild ? Slot : 'span'

  const defaultClasses = `
    text-gray-100
    font-sans
  `

  const sizeClasses = React.useMemo(() => sizes[size], [size])

  return (
    <Component className={clsx(defaultClasses, sizeClasses, className)}>{children}</Component>
  )
}
