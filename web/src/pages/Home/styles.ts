import styled from 'styled-components'
import { showUp } from '../../assets/styles/animations'
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

export const Logo = styled.img`
  animation: ${showUp} 200ms;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.6rem;
  text-align: center;
  margin: 5rem 0 2rem 0;
  animation: ${showUp} 200ms 50ms backwards;

  @media (min-width: 1000px) {
    margin-top: 100px;
    text-align: left;
  }
`

export const Form = styled.form`
  animation: ${showUp} 200ms 100ms backwards;

  button {
    margin: 1.5rem 0 4rem 0;
  }
`

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${showUp} 200ms 150ms backwards;

  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`
