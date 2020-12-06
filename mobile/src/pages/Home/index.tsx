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

const Home = () => {
  const logo = require('../../assets/images/logo/logo.png')

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
          <Incident />
        )}
      />
    </Container>
  )
}

export default Home
