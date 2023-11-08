import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'
import { HeaderContainer, LocationContainer, CartContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationContainer to="/" title="Home">
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </LocationContainer>

        <CartContainer to="/cart" title="Cart">
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
