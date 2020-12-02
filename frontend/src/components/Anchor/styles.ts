import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #E02041;
  font-size: 1.8rem;

  & :first-child {
    margin-right: 1.6rem;
  }
`

export const Link = styled(RouterLink)`
  color: #41414D;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 200ms;

  :hover {
    color: ${lighten(0.15, '#41414D')};
  }
`
