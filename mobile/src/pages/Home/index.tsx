import React from 'react'

import {
  Container,
  Logo,
  Info,
  Header,
  Welcome,
  Description,
  Bold
} from './styles'

import logo from '../../../assets/images/logo/logo.png'

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Info>Total de <Bold>43 casos</Bold></Info>
      </Header>
      <Welcome>Bem-vindo!</Welcome>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
    </Container>
  )
}

export default Home
