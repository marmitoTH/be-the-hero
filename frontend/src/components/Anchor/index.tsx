import React from 'react'
import { LinkProps } from 'react-router-dom'
import { Link } from './styles'
import { } from 'react-icons/fi'

type Props = LinkProps

const Anchor: React.FC<Props> = ({ children, ...rest }) => (
  <>
    <Link {...rest}>{children}</Link>
  </>
)

export default Anchor
