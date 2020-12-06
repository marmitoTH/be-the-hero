import React from 'react'
import formatCurrency from '../../utils/formatCurrency'

import {
  Container,
  Title,
  Text,
  Button,
  Details,
  DetailsIcon
} from './styles'

interface Props {
  ong: string
  title: string
  value: number

  onPress(): void
}

const Incident: React.FC<Props> = ({
  ong,
  title,
  value,
  onPress
}) => {
  return (
    <Container>
      <Title>ONG:</Title>
      <Text>{ong}</Text>
      <Title>CASO:</Title>
      <Text>{title}</Text>
      <Title>VALOR:</Title>
      <Text>{formatCurrency(value)}</Text>
      <Button onPress={() => onPress()}>
        <Details>Ver mais detalhes</Details>
        <DetailsIcon name='arrow-right' />
      </Button>
    </Container>
  )
}

export default Incident
