import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,

  // Default values for all variants
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },

  // Props config for all variants
  argTypes: {
    size: {
      // Define property values
      options: ['sm', 'md', 'lg'],
      // Config property exibition
      control: {
        type: 'inline-radio'
      },
      // Hide size prop for all variants
      table: {
        disable: true
      }
    },
    asChild: {
      // Hide asChild prop for all variants
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>

/**
 * Small variant
 */
export const Small: StoryObj<TextProps> = {
  args: {
    children: 'Small Text',
    size: 'sm',
  }
}

/**
 * Medium variant
 */
export const Medium: StoryObj<TextProps> = {
  args: {
    children: 'Medium Text',
    size: 'md',
  }
}

/**
 * Large variant
 */
export const Large: StoryObj<TextProps> = {
  args: {
    children: 'Large Text',
    size: 'lg',
  }
}

/**
 * Custom component variant
 */
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    size: 'md',
    children: <p>This is a paragraph</p>,
  },
  argTypes: {
    children: {
      // hide children prop for this variant
      table: {
        disable: true
      }
    },
    size: {
      // show size property for this variant
      table: {
        disable: false
      }
    }
  }
}