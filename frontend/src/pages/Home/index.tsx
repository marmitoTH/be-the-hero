import React from 'react'
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
  return (
    <Container>
      <Main>
        <Logo src={logo} alt='Be The Hero Logo' />
        <Title>Faça seu logon</Title>
        <Form>
          <TextField placeholder='Sua ID' />
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
