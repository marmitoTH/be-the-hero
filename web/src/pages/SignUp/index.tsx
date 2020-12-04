import React, { useCallback } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
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
  LocationContainer,
  AnchorContainer
} from './styles'

interface FormData {
  name: string
  email: string
  whatsapp: string
  city: string
  uf: string
}

const SignUp: React.FC = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
    const { name, email, whatsapp, city, uf } = data

    await api.post('/ongs', {
      name,
      email,
      whatsapp,
      city,
      uf
    }).then(response => {
      if (response.status === 201) {
        console.log(response.data)
        history.push('/')
      }
    }).catch(() => { })
  }, [history])

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            ref={register}
            name='name'
            placeholder='Nome da ONG'
          />
          <TextField
            ref={register({
              required: true,
              pattern: /.+@.+/,
              maxLength: 128
            })}
            name='email'
            type='email'
            placeholder='Email'
            required
            maxLength={128}
          />
          <TextField
            ref={register({
              required: true,
              minLength: 8,
              maxLength: 32
            })}
            name='whatsapp'
            placeholder='WhatsApp'
            required
            minLength={8}
            maxLength={32}
          />
          <LocationContainer>
            <TextField
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 64
              })}
              name='city'
              placeholder='Cidade'
              required
              minLength={3}
              maxLength={64}
            />
            <TextField
              ref={register({
                required: true,
                minLength: 2,
                maxLength: 2
              })}
              name='uf'
              placeholder='UF'
              required
              minLength={2}
              maxLength={2}
            />
          </LocationContainer>
          <Button>Cadastrar</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default SignUp
