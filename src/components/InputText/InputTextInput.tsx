type InputTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {}

/**
 * Input Text
 * @param props 
 * @returns InputTextInput
 */
export const InputTextInput = (props: InputTextInputProps) => {

  const defaultClasses = `
    bg-transparent 
    outline-none 
    text-gray-100 
    text-xs 
    flex-1 
    py-4
    h-12
  `

  return (
    <input {...props} className={defaultClasses} />
  )
}

InputTextInput.displayName = 'InputText.InputTextInput'