import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Anchor from '../../components/Anchor'
import logo from '../../assets/images/logo.svg'

import {
  Container,
  Wrapper,
  Main,
  Form,
  Logo,
  Title,
  Description,
  AnchorContainer
} from './styles'

const SignUp: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Logo src={logo} alt='Be The Hero Logo' />
          <Title>Cadastro</Title>
          <Description>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Description>
          <AnchorContainer>
            <Anchor to='/' icon={FiArrowLeft}>Voltar para o logon</Anchor>
          </AnchorContainer>
        </Main>
        <Form>
          <TextField placeholder='Nome da ONG' />
          <TextField placeholder='Email' />
          <TextField placeholder='WhatsApp' />
          <TextField placeholder='Cidade' />
          <Button>Cadastrar</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default SignUp
