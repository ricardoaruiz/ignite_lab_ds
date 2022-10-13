import { Slot } from '@radix-ui/react-slot'

type TextInputIconProps = React.PropsWithChildren & {}

/**
 * 
 * @param param0 
 * @returns 
 */
export const InputTextIcon = ({ children }: TextInputIconProps) => {

  const defaultClasses = `
    w-6 
    h-6 
    text-gray-400
  `

  return (
    <Slot className={defaultClasses}>
      {children}
    </Slot>
  )
}

InputTextIcon.displayName = 'InputText.InputTextIcon'