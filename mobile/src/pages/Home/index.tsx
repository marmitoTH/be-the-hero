import React from 'react'
import Incident from '../../components/Incident'

import {
  Container,
  Logo,
  Info,
  Header,
  Welcome,
  Description,
  Incidents,
  Bold
} from './styles'

import logo from '../../../assets/images/logo/logo.png'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <ScrollView>
      <Container>
        <Header>
          <Logo source={logo} />
          <Info>Total de <Bold>43 casos</Bold></Info>
        </Header>
        <Welcome>Bem-vindo!</Welcome>
        <Description>Escolha um dos casos abaixo e salve o dia.</Description>
        <Incidents>
          <Incident />
          <Incident />
          <Incident />
          <Incident />
        </Incidents>
      </Container>
    </ScrollView>
  )
}

export default Home
