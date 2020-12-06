import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 48px 24px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const Logo = styled.Image``

export const Info = styled.Text`
  color: #737380;
  font-size: 15px;
`

export const Welcome = styled.Text`
  color: #13131A;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 16px;
`

export const Description = styled.Text`
  max-width: 75%;
  color: #737380;
  font-size: 20px;
  line-height: 30px;
`

export const Incidents = styled.FlatList`
  margin-top: 32px;
  margin-bottom: 180px;
`

export const Bold = styled.Text`
  font-weight: bold;
`
