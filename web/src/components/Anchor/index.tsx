import React from 'react'
import { LinkProps } from 'react-router-dom'
import { IconBaseProps } from 'react-icons'
import { Container, Link } from './styles'

interface Props extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>
}

const Anchor: React.FC<Props> = ({ children, icon: Icon, style, ...rest }) => (
  <Container style={style}>
    {Icon && <Icon />}
    <Link {...rest}>{children}</Link>
  </Container>
)

export default Anchor
