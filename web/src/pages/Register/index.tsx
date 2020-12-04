import React, { useCallback } from 'react'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
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

interface FormData {
  title: string
  description: string
  value: number
}

const Register: React.FC = () => {
  const { token } = useAuth()
  const history = useHistory()
  const { register, handleSubmit } = useForm<FormData>()

  const onCancel = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  const onSubmit = useCallback(async (data: FormData) => {
    const { title, description, value } = data

    await api.post('/incidents', {
      title,
      description,
      value
    }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 201) {
        history.push('/dashboard')
      }
    }).catch(() => { })
  }, [history, token])

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            ref={register({
              required: true,
              maxLength: 64,
            })}
            name='title'
            placeholder='Título do caso'
            required
            maxLength={64}
          />
          <TextArea
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 256
            })}
            name='description'
            placeholder='Descrição'
            required
            minLength={10}
            maxLength={256}
          />
          <TextField
            ref={register({
              required: true,
              minLength: 2,
              maxLength: 9
            })}
            name='value'
            placeholder='Valor em reais'
            required
            minLength={2}
            maxLength={9}
          />
          <ButtonsContainer>
            <Button
              secondary
              type='button'
              onClick={() => {
                onCancel()
              }}
            >
              Cancelar
            </Button>
            <Button>Cadastrar</Button>
          </ButtonsContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
