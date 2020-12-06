import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: ${Constants.statusBarHeight}px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Main = styled.View`
  padding: 24px;
  margin-top: 40px;
  margin-bottom: 16px;
  border-radius: 8px;
  background: #FFF;
`

export const Footer = styled.View`
  padding: 24px;
  background: #FFF;
  border-radius: 8px;
`

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled.Image``

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(Feather)`
  color: #E02041;
  font-size: 28px;
`

export const Title = styled.Text`
  color: #41414D;
  font-size: 14px;
  font-weight: bold;
`

export const Text = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 15px;
  color: #737380;
`

export const HeroTitle = styled.Text`
  color: #13131A;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
`
