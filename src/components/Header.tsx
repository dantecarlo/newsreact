import React from 'react'

interface IProps {
  title: string
}

const Header = ({ title }: IProps) => (
  <div>
    <nav className="nav-wrapper light-blue darken-3">
      <a className="brand-logo center">{title}</a>
    </nav>
  </div>
)

export default Header
