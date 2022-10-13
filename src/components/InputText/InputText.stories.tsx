import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react'

import { InputText, InputTextRootProps } from '.'

export default {
  name: 'Components/InputText',
  component: InputText.Root,
  decorators: [
    (Story) => <div className="max-w-[800px]">
      {Story()}
    </div>
  ],
  args: {
    children: <InputText.Input placeholder='Type your text here' />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputTextRootProps>

export const Default: StoryObj<InputTextRootProps> = {}

export const WithLeftIcon: StoryObj<InputTextRootProps> = {
  args: {
    children: [
      <InputText.Icon>
        <EnvelopeSimple />
      </InputText.Icon>,

      <InputText.Input placeholder='Type your text here' />
    ]
  }
}

export const WithRighttIcon: StoryObj<InputTextRootProps> = {
  args: {
    children: [
      <InputText.Input placeholder='Type your text here' />,

      <InputText.Icon>
        <EnvelopeSimple />
      </InputText.Icon>,

    ]
  }
} 