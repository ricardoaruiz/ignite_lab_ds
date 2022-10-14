import { EnvelopeSimple } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { InputText } from './components/InputText'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import './styles/global.css'

function App() {
  return (
    <div className={`
      h-screen
      w-screen
      bg-gray-900
      flex
      flex-col
      items-center
      justify-center
      text-gray-100
    `}>
      <header className={`flex flex-col items-center`}>
        <Logo />
        <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
        <Text size='md' className='text-gray-400 mt-3'>Faça login e comece a usar</Text>
      </header>

      <form className='flex flex-col gap-4 mt-3 items-stretch w-full max-w-[380px]'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>
          <InputText.Root>
            <InputText.Icon>
              <EnvelopeSimple />
            </InputText.Icon>
            <InputText.Input id="email" type="text" placeholder='seu_email@email.com.br' />
          </InputText.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text>Sua Senha</Text>
          <InputText.Root>
            <InputText.Icon>
              <EnvelopeSimple />
            </InputText.Icon>
            <InputText.Input id="password" type="password" placeholder='***************' />
          </InputText.Root>
        </label>

        <Checkbox
          label='Me manter logado por 30 dias'
          className='mt-3'
          onCheckedChange={(checked) => console.log(checked)}
        />

        <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className={`flex flex-col items-center gap-4 mt-8`}>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default App
