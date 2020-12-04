import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;
  padding: 3.2rem;
  border-radius: .8rem;
  background: #fff;
`

export const Section = styled.section`
  & + section {
    margin-top: 3rem;
  }
`

export const Title = styled.h2`
  color: #41414D;
  font-size: 1.4rem;
`

export const Text = styled.p`
  color: #737380;
  font-size: 1.8rem;
  margin-top: 1.6rem;
`

export const Delete = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 3rem;
  top: 3rem;
  color: #A8A8B3;
  font-size: 2.4rem;
  background: none;
  transition: color 200ms;

  :hover {
    color: ${shade(.25, '#A8A8B3')};
  }
`
