import React from 'react'
//import { useForm } from 'react-hook-form'
import { FiArrowLeft } from 'react-icons/fi'
import Anchor from '../../components/Anchor'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import logo from '../../assets/images/logo.svg'

import {
  Container,
  Wrapper,
  Main,
  Form,
  ButtonsContainer,
  Logo,
  Title,
  Description,
  TextArea,
  AnchorContainer
} from './styles'

const Register: React.FC = () => {
  //const {register, handleSubmit} = useForm()

  return (
    <Container>
      <Wrapper>
        <Main>
          <Logo src={logo} alt='Be The Hero Logo' />
          <Title>Cadastrar novo caso</Title>
          <Description>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</Description>
          <AnchorContainer>
            <Anchor to='/dashboard' icon={FiArrowLeft}>Voltar para home</Anchor>
          </AnchorContainer>
        </Main>
        <Form>
          <TextField placeholder='Título do caso' />
          <TextArea placeholder='Descrição' />
          <TextField placeholder='Valor em reais' />
          <ButtonsContainer>
            <Button secondary>Cancelar</Button>
            <Button>Cadastrar</Button>
          </ButtonsContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
