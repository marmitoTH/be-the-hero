import React from 'react'
import { Input } from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const TextField = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => (
    <Input ref={ref} {...props} />
  )
)

export default TextField
