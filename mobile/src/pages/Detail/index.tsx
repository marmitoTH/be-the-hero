import React from 'react'
import { Linking } from 'react-native'
import { StackParams } from '../../Router'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import Button from '../../components/Button'

import {
  Container,
  Header,
  Main,
  Footer,
  Actions,
  Logo,
  BackButton,
  BackIcon,
  Title,
  Text,
  HeroTitle
} from './styles'

type DetailProps = RouteProp<StackParams, 'Detail'>

const Detail = () => {
  const navigation = useNavigation()
  const route = useRoute<DetailProps>()
  const incident = route.params.incident
  const message = `Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "CASO" com o valor de R$ 120,00!`
  const logo = require('../../assets/images/logo/logo.png')

  const NavigateToHome = () => {
    navigation.goBack()
  }

  const SendMail = () => {
    console.log(incident.ong.email)
    MailComposer.composeAsync({
      subject: `Herói do caso: Cadelinha atropelada`,
      recipients: [incident.ong.email],
      body: message
    })
  }

  const SendWhatsApp = () => {
    console.log(incident.ong.whatsapp)
    Linking.openURL(`whatsapp://send?phone=${incident.ong.whatsapp}&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <BackButton onPress={NavigateToHome}>
          <BackIcon name='arrow-left' />
        </BackButton>
      </Header>
      <Main>
        <Title>ONG:</Title>
        <Text>{incident.ong.name}</Text>
        <Title>CASO:</Title>
        <Text>{incident.title}</Text>
        <Title>Descrição:</Title>
        <Text>{incident.description}</Text>
        <Title>VALOR:</Title>
        <Text style={{ marginBottom: 0 }}>{incident.value}</Text>
      </Main>
      <Footer>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <Text
          style={{
            marginBottom: 0,
            marginTop: 16
          }}
        >
          Entre em contato:
        </Text>
        <Actions>
          <Button
            style={{ minWidth: '48%' }}
            onPress={SendWhatsApp}
          >
            WhatsApp
          </Button>
          <Button
            style={{ minWidth: '48%' }}
            onPress={SendMail}
          >
            E-mail
          </Button>
        </Actions>
      </Footer>
    </Container>
  )
}

export default Detail
