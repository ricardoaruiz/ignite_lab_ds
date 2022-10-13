import { clsx } from 'clsx'

export type InputTextRootProps = React.PropsWithChildren & {}

/**
 * Input Root
 * @param param0 
 * @returns 
 */
export const InputTextRoot = ({ children }: InputTextRootProps) => {

  const defaultClasses = `
    flex
    items-center
    gap-3
    px-3
    rounded
    bg-gray-800
    placeholder:text-gray-400
    w-full
    transition-all
  `

  const focusedClasses = `
    focus-within:ring-2
    ring-cyan-300
  `

  return (
    <div className={clsx(defaultClasses, focusedClasses)}>{children}</div>
  )
}

InputTextRoot.displayName = 'InputText.InputTextRoot'