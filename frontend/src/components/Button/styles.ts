import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button<{ secondary: boolean }>`
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

  ${props => props.secondary && css`
    color: #41414D;
    background: none;
    border: .25rem solid #DCDCE6;

    :hover {
      background: ${shade(0.1, '#EFEFEF')};
    }
  `}
`
