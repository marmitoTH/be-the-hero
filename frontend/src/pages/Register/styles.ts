import styled from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  max-width: 37rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    max-width: 1120px;
  }
`

export const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    padding: 9.6rem;
    background: #F0F0F5;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    align-items: flex-start;
  }
`

export const Form = styled.div`
  @media (min-width: 1000px) {
    max-width: 44.8rem;
  }
`

export const Logo = styled.img`
  max-width: 19.1rem;
`

export const ButtonsContainer = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-gap: 1.7rem;
  grid-template-columns: 1fr 2fr;
`

export const Title = styled.h1`
  color: #13131A;
  font-weight: 500;
  font-size: 3.6rem;
  margin: 3rem 0 1.5rem 0;

  @media (min-width: 1000px) {
    margin: 6.4rem 0 3.2rem 0;
  }
`

export const Description = styled.p`
  color: #737380;
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    max-width: 38.4rem;
    text-align: left;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 17.5rem;
  margin: .8rem 0;
  color: #41414D;
  font-size: 1.8rem;
  padding: 2.4rem 1.8rem;
  border-radius: .8rem;
  border: .15rem solid #DCDCE6;
  resize: none;

  ::placeholder {
    color: #A8A8B3;
  }
`

export const AnchorContainer = styled.div`
  margin: 1rem 0 3rem 0;

  @media (min-width: 1000px) {
    margin-top: 8rem;
  }
`
