import styled from 'styled-components'
import { shade, lighten } from 'polished'
import { FiLogIn } from 'react-icons/fi'
import heroes from '../../assets/images/heroes.png'

export const Container = styled.div`
  width: 90vw;
  max-width: 37rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    max-width: 1120px;
    justify-content: space-between;
    background: url(${heroes}) 100% no-repeat;
  }
`

export const Main = styled.div`
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 100%;
    max-width: 35rem;
    margin: 0;
  }
`

export const Logo = styled.img``

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  text-align: center;
  margin: 5rem 0 2rem 0;

  @media (min-width: 1000px) {
    margin-top: 100px;
    text-align: left;
  }
`

export const Form = styled.form``

export const Input = styled.input`
  display: block;
  width: 100%;
  max-height: 6rem;
  color: #41414D;
  font-size: 1.8rem;
  padding: 2.4rem 1.8rem;
  border-radius: .8rem;
  border: .15rem solid #DCDCE6;

  ::placeholder {
    color: #A8A8B3;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 6rem;
  color: #F0F0F5;
  font-size: 1.8rem;
  font-weight: bold;
  background: #E02041;
  border-radius: .8rem;
  margin: 1.5rem 0 4rem 0;
  transition: background 200ms;

  :hover {
    background: ${shade(0.15, '#E02041')};
  }
`

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`

export const RegisterIcon = styled(FiLogIn)`
  color: #E02041;
  font-size: 1.8rem;
  margin-right: 1.9rem;
`

export const Register = styled.a`
  color: #41414D;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 200ms;

  :hover {
    color: ${lighten(0.15, '#41414D')};
  }
`
