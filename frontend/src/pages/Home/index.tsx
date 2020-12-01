import React from 'react'
import logo from '../../assets/images/logo.svg'

import {
  Container,
  Logo,
  Title,
  Form,
  Input,
  Button,
  RegisterContainer,
  RegisterIcon,
  Register
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt='Be The Hero Logo' />
      <Title>Faça seu logon</Title>
      <Form>
        <Input type='password' placeholder='Sua ID' />
        <Button>Entrar</Button>
      </Form>
      <RegisterContainer>
        <RegisterIcon />
        <Register href='/cadastrar'>Não tenho cadastro</Register>
      </RegisterContainer>
    </Container>
  )
}

export default Home
