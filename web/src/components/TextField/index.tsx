import React from 'react'
import { Input } from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const TextField: React.FC<Props> = (props) => (
  <Input {...props} />
)

export default TextField
