import React from 'react'
import { useNavigation } from '@react-navigation/native'
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

const Home = () => {
  const navigation = useNavigation()
  const logo = require('../../assets/images/logo/logo.png')

  const NavigateToDetail = () => {
    navigation.navigate('Detail')
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Info>Total de <Bold>43 casos</Bold></Info>
      </Header>
      <Welcome>Bem-vindo!</Welcome>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
      <Incidents
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <Incident onPress={NavigateToDetail} />
        )}
      />
    </Container>
  )
}

export default Home
