import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

import {
  Container,
  Section,
  Title,
  Text,
  Delete
} from './styles'

const Incident: React.FC = () => (
  <Container>
    <Section>
      <Title>CASO:</Title>
      <Text>Cadelinha atropelada</Text>
    </Section>
    <Section>
      <Title>Descrição:</Title>
      <Text>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</Text>
    </Section>
    <Section>
      <Title>Valor:</Title>
      <Text>R$ 120,00 reais</Text>
    </Section>
    <Delete type='button'>
      <FiTrash2 />
    </Delete>
  </Container>
)

export default Incident
