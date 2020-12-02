import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { shade } from 'polished'

export const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  max-width: 112rem;
`

export const Header = styled.header`
  width: 100%;
  margin: 3.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLeft = styled.section`
  display: flex;
  align-items: center;
`

export const HedaerRight = styled.section`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  max-width: 14.4rem;
  margin-right: 4.8rem;
`

export const Welcome = styled.section`
  color: #13131A;
  font-size: 2rem;
`

export const Register = styled(Link)`
  height: 6rem;
  padding: 0 4.8rem;
  color: #F0F0F5;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  background: #E02041;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;
  transition: background 200ms;

  :hover {
    background: ${shade(.15, '#E02041')};
  }
`

export const SignOut = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 8px;
  border: .2rem solid #DCDCE6;
  color: #E02041;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  transition: color 200ms;

  :hover {
    color: ${shade(.2, '#E02041')};
  }
`

export const Title = styled.h1`
  color: #13131A;
  font-size: 3.6rem;
  font-weight: 500;
  margin-top: 8rem;
  margin-bottom: 3rem;
`

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`
