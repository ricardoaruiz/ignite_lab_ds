import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import { SignIn } from './SignIn'

export default {
  name: 'Pages/SignIn',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByPlaceholderText('seu_email@email.com.br')
    userEvent.type(emailInput, 'ricardo.almendro.ruiz@gmail.com')

    const passwordInpt = canvas.getByPlaceholderText('seu_email@email.com.br')
    userEvent.type(passwordInpt, '123456')

    const submitButton = canvas.getByRole('button', { name: /entrar na plataforma/i })
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}