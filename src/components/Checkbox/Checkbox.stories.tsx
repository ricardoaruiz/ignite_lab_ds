import { Meta, StoryObj } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  name: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Lembrar de mim por 30 dias',
    onCheckedChange: (checked) => console.log(checked)
  },
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    onCheckedChange: {
      table: {
        disable: true
      }
    }
  }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true
  }
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    disabled: true
  }
}