import React from 'react'

type Props = {
    header: string
}

const Header = ({ header } : Props) => {
  return (
    <h1>{header}</h1>
  )
}

export default Header;