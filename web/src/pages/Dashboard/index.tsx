import React, { useCallback, useEffect, useState } from 'react'
import { FiPower } from 'react-icons/fi'
import logo from '../../assets/images/logo.svg'
import Case from '../../components/Case'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'

import {
  Container,
  Header,
  HeaderLeft,
  HedaerRight,
  Logo,
  Welcome,
  Register,
  SignOut,
  Title,
  List
} from './styles'

interface Ong {
  name: string
}

interface Incidents {
  incidents: {
    id: string
    title: string
    description: string
    value: number
  }[]

  total: number
}

const Dashboard: React.FC = () => {
  const { signOut, token } = useAuth()
  const [ong, setOng] = useState<Ong>()
  const [incidents, setIncidents] = useState<Incidents>()

  const fetchOng = useCallback(async () => {
    await api.get<Ong>('/ongs', {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      setOng(response.data)
    }).catch(() => {
      signOut()
    })
  }, [token, signOut])

  const fetchIncidents = useCallback(async () => {
    await api.get<Incidents>('/incidents/ong', {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      setIncidents(response.data)
    }).catch(() => { })
  }, [token])

  useEffect(() => {
    fetchOng()
    fetchIncidents()
  }, [fetchOng, fetchIncidents])

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="Be The Hero Logo" />
          <Welcome>Bem vindo(a), {ong?.name}</Welcome>
        </HeaderLeft>
        <HedaerRight>
          <Register to='/cadastrar-caso'>Cadastrar novo caso</Register>
          <SignOut
            type='button'
            onClick={() => signOut()}
          >
            <FiPower />
          </SignOut>
        </HedaerRight>
      </Header>
      <Title>Casos cadastrados</Title>
      <List>
        {incidents?.incidents.map((data, key) => (
          <Case />
        ))}
      </List>
    </Container>
  )
}

export default Dashboard
