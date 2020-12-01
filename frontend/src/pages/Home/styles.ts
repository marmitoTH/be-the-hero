import styled from 'styled-components'
import { BsBoxArrowInRight } from 'react-icons/bs'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 3rem;
`

export const Logo = styled.img``

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  text-align: center;
  margin: 5rem 0 2rem 0;
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
`

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterIcon = styled(BsBoxArrowInRight)`
  color: #E02041;
  font-size: 1.8rem;
  margin-right: 1.9rem;
`

export const Register = styled.a`
  color: #41414D;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
`
