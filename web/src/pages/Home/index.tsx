import React, { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiLogIn } from 'react-icons/fi'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import Anchor from '../../components/Anchor'
import logo from '../../assets/images/logo.svg'

import {
  Container,
  Main,
  Logo,
  Title,
  Form,
  RegisterContainer
} from './styles'

const Home: React.FC = () => {
  const { signIn } = useAuth()
  const [ID, setID] = useState('')

  const handleLogin = async () => {
    await signIn(ID)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleLogin()
  }

  return (
    <Container>
      <Main>
        <Logo src={logo} alt='Be The Hero Logo' />
        <Title>Faça seu logon</Title>
        <Form onSubmit={onSubmit}>
          <TextField
            placeholder='Sua ID'
            onChange={e => setID(e.target.value)}
          />
          <Button>Entrar</Button>
        </Form>
        <RegisterContainer>
          <Anchor to='/cadastrar' icon={FiLogIn}>Não tenho cadastro</Anchor>
        </RegisterContainer>
      </Main>
    </Container>
  )
}

export default Home
