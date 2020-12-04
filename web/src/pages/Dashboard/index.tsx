import React from 'react'
import { FiPower } from 'react-icons/fi'
import logo from '../../assets/images/logo.svg'
import Case from '../../components/Case'
import { useAuth } from '../../hooks/auth'

import {
  Container,
  Header,
  HeaderLeft,
  HedaerRight,
  Logo,
  Welcome,
  Register,
  SignOut,
  Title,
  List
} from './styles'

const Dashboard: React.FC = () => {
  const { signOut, ong } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="Be The Hero Logo" />
          <Welcome>Bem vindo(a), APAD</Welcome>
        </HeaderLeft>
        <HedaerRight>
          <Register to='/cadastrar-caso'>Cadastrar novo caso</Register>
          <SignOut
            type='button'
            onClick={() => signOut()}
          >
            <FiPower />
          </SignOut>
        </HedaerRight>
      </Header>
      <Title>Casos cadastrados</Title>
      <List>
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </List>
    </Container>
  )
}

export default Dashboard
