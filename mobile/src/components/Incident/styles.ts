import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
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

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Details = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`

export const DetailsIcon = styled(Feather)`
  color: #e02041;
  font-size: 16px;
`
