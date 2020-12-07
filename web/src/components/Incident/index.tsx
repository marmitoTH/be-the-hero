import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import formatCurrency from '../../utils/formatCurrency'

import {
  Container,
  Section,
  Title,
  Text,
  Delete
} from './styles'

interface Props {
  title: string
  description: string
  value: number

  onDelete(): void
}

const Incident: React.FC<Props> = (props) => (
  <Container>
    <Section>
      <Title>CASO:</Title>
      <Text>{props.title}</Text>
    </Section>
    <Section>
      <Title>Descrição:</Title>
      <Text>{props.description}</Text>
    </Section>
    <Section>
      <Title>Valor:</Title>
      <Text>{formatCurrency(props.value)}</Text>
    </Section>
    <Delete
      type='button'
      onClick={() => props.onDelete()}
    >
      <FiTrash2 />
    </Delete>
  </Container>
)

export default Incident
