import { useContext } from 'react'
import { ShoppingCartSimple, MapPin } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'
import { HeaderContainer, LocationContainer, CartContainer } from './styles'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartCoffees } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationContainer to="/" title="Home">
          <MapPin size={22} weight="fill" />
          <span>Nashville, TN</span>
        </LocationContainer>

        <CartContainer to="/checkout" title="Checkout">
          <ShoppingCartSimple size={22} weight="fill" />
          {cartCoffees.length > 0 && <span>{cartCoffees.length}</span>}
        </CartContainer>
      </nav>
    </HeaderContainer>
  )
}
