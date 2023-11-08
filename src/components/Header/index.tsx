import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Home">
          <MapPin size={22} weight="fill" />
        </NavLink>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
