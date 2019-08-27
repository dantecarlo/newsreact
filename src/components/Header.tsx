import React from 'react'

interface Props {
  title: string
}

const Header = ({ title }: Props) => (
  <div>
    <nav className="nav-wrapper light-blue darken-3">
      <a className="brand-logo center">{title}</a>
    </nav>
  </div>
)

export default Header
