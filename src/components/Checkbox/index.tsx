import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx'
import { CheckboxProps as CheckboxPropsPrimitive } from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { useId } from 'react';
import { Text } from '../Text';

export type CheckboxProps = CheckboxPropsPrimitive & {
  label?: string;
  className?: string;
}

export const Checkbox = ({ label, id, className, ...props }: CheckboxProps) => {
  const internalId = id || useId()

  return (
    <div className={clsx(`
      flex 
      items-center 
      gap-2 
      rounded 
    `,
      className
    )}
    >
      <CheckboxPrimitive.Root
        id={internalId}
        className={clsx(`
          w-6
          h-6 
          p-[2px] 
          bg-gray-800 
          rounded
          outline-none
          focus-within:ring-1 
          ring-cyan-300
        `,
          {
            'cursor-not-allowed': props.disabled,
            'bg-gray-400': props.disabled
          }
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <Check
            weight='bold'
            className={clsx(`
              h-5 
              w-5 
              text-cyan-500
            `,
              {
                'text-cyan-300': props.disabled
              }
            )} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label &&
        <Text
          asChild
          className={
            clsx('cursor-pointer text-gray-100', {
              'text-gray-400': props.disabled,
              'cursor-not-allowed': props.disabled,
            }
            )}>
          <label htmlFor={internalId}>{label}</label>
        </Text>}
    </div>
  )
}
