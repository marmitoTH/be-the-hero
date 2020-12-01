import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button`
  width: 100%;
  height: 6rem;
  color: #F0F0F5;
  font-size: 1.8rem;
  font-weight: bold;
  background: #E02041;
  border-radius: .8rem;
  transition: background 200ms;

  :hover {
    background: ${shade(0.15, '#E02041')};
  }
`
