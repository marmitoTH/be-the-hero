import React from 'react'
import { Button as Btn } from './styles'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <Btn {...rest}>{children}</Btn>
)

export default Button
