import React from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type HeadingProps = React.PropsWithChildren & {
  size?: 'sm' | 'md' | 'lg',
  asChild?: boolean
  className?: string
}

const sizes = {
  sm: 'text-lg',
  md: 'text-xlg',
  lg: 'text-2xl'
}

export const Heading = ({ children, size = 'md', asChild = false, className }: HeadingProps) => {

  const Component = asChild ? Slot : 'h2'

  const defaultClasses = `
    text-gray-100
    font-sans
    font-bold
  `

  const sizeClasses = React.useMemo(() => sizes[size], [size])

  return (
    <Component className={clsx(defaultClasses, sizeClasses, className)}>{children}</Component>
  )
}
