import React, { useEffect, useState } from 'react'
import api from '../../services/api'
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

export interface IncidentData {
  id: string
  title: string
  description: string
  value: number

  ong: {
    name: string
    whatsapp: string
    email: string
  }
}

interface IncidentsData {
  incidents: IncidentData[]
  total: number
}

const Home = () => {
  const navigation = useNavigation()
  const [incidentsData, setIncidentsData] = useState<IncidentsData>()
  const logo = require('../../assets/images/logo/logo.png')

  const getIncidents = async () => {
    await api.get<IncidentsData>('/incidents')
      .then(response => {
        setIncidentsData(response.data)
      })
      .catch(response => {
        console.log(response.status)
      })
  }

  const NavigateToDetail = (incident: IncidentData) => {
    navigation.navigate('Detail', { incident })
  }

  useEffect(() => {
    getIncidents()
  }, [])

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Info>Total de <Bold>{incidentsData?.total} casos</Bold></Info>
      </Header>
      <Welcome>Bem-vindo!</Welcome>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
      <Incidents
        data={incidentsData?.incidents}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        renderItem={element => {
          const data = element.item as IncidentData
          return (
            <Incident
              ong={data.ong.name}
              title={data.title}
              value={data.value}
              onPress={() => NavigateToDetail(data)}
            />
          )
        }}
      />
    </Container>
  )
}

export default Home
