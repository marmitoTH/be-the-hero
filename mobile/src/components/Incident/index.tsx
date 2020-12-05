import React from 'react'
import { View } from 'react-native'

import {
  Container,
  Main,
  Footer,
  Title,
  Text,
  FooterText
} from './styles'

const Incident = () => {
  return (
    <Container>
      <Main>
        <Title>CASO:</Title>
        <Text>Cadelinha atropelada</Text>
        <Title>Valor:</Title>
        <Text>R$ 120,00 reais</Text>
      </Main>
      <Footer>
        <FooterText>Ver mais detalhes</FooterText>
      </Footer>
    </Container>
  )
}

export default Incident
