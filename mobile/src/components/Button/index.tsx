import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import {
  Button as Btn,
  ButtonText
} from './styles'

type Props = RectButtonProperties

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Btn {...rest}>
      <ButtonText>{children}</ButtonText>
    </Btn>
  )
}

export default Button
