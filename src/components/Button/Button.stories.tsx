import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  name: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
