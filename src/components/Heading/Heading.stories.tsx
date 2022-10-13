import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from '.'

export default {
  name: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading'
  },
  argTypes: {
    size: {
      // Hide size prop on all variants
      table: {
        disable: true
      }
    },
    asChild: {
      // Hide asChild prop on all variants
      table: {
        disable: true
      }
    }
  }
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: 'Small Heading',
    size: 'sm'
  }
}

export const Medium: StoryObj<HeadingProps> = {
  args: {
    children: 'Medium Heading',
    size: 'md'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: 'Large Heading',
    size: 'lg'
  }
}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>This is a H1</h1>,
    size: 'lg'
  },
  argTypes: {
    children: {
      // Hide children props for this variant
      table: {
        disable: true
      }
    }
  }
}