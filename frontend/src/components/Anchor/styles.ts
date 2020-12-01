import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { lighten } from 'polished'

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
