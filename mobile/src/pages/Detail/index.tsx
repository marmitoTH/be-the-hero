import React from 'react'
import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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

const Detail = () => {
  const navigation = useNavigation()
  const message = `Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "CASO" com o valor de R$ 120,00!`
  const logo = require('../../assets/images/logo/logo.png')

  const NavigateToHome = () => {
    navigation.goBack()
  }

  const SendMail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: Cadelinha atropelada`,
      recipients: [`apad@mail.com`],
      body: message
    })
  }

  const SendWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=5586998110028&text=${message}`)
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
        <Text>APAD</Text>
        <Title>CASO:</Title>
        <Text>Cachorrinha atropelada</Text>
        <Title>Descrição:</Title>
        <Text>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</Text>
        <Title>VALOR:</Title>
        <Text style={{ marginBottom: 0 }}>R$ 120,00</Text>
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
