import React from 'react'

import {
  Container,
  Title,
  Text,
  Button,
  Details,
  DetailsIcon
} from './styles'

const Incident = () => {
  return (
    <Container>
      <Title>ONG:</Title>
      <Text>APAD</Text>
      <Title>CASO:</Title>
      <Text>Cachorrinha atropelada</Text>
      <Title>VALOR:</Title>
      <Text>R$ 120,00</Text>
      <Button>
        <Details>Ver mais detalhes</Details>
        <DetailsIcon name='arrow-right' />
      </Button>
    </Container>
  )
}

export default Incident
