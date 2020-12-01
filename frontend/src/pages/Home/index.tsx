import React from 'react'
import logo from '../../assets/images/logo.svg'

import {
  Container,
  Main,
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
      <Main>
        <Logo src={logo} alt='Be The Hero Logo' />
        <Title>Faça seu logon</Title>
        <Form>
          <Input placeholder='Sua ID' />
          <Button>Entrar</Button>
        </Form>
        <RegisterContainer>
          <RegisterIcon />
          <Register to='/cadastrar'>Não tenho cadastro</Register>
        </RegisterContainer>
      </Main>
    </Container>
  )
}

export default Home
