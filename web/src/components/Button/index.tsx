import React from 'react'
import { Button as Btn } from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

const Button: React.FC<Props> = ({ children, secondary, ...rest }) => (
  <Btn secondary={secondary || false} {...rest}>{children}</Btn>
)

export default Button
