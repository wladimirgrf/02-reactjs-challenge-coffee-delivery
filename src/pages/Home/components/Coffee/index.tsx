import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CoffeeContainer,
  CoffeeImage,
  CoffeeInfo,
  CoffeeTags,
  Price,
  AddToCartContainer,
  DecrementButton,
  IncrementButton,
  QuantityContainer,
  QuantityInput,
  AddToCartButton,
} from './styles'

import traditional from '../../../../assets/coffee/traditional.svg'

export function Coffee() {
  return (
    <CoffeeContainer>
      <CoffeeImage src={traditional}></CoffeeImage>
      <CoffeeTags>
        <span>TRADITIONAL</span>
      </CoffeeTags>
      <CoffeeInfo>
        <strong>Traditional Express</strong>
        <span>Traditional coffee made with hot water and ground beans</span>
      </CoffeeInfo>
      <AddToCartContainer>
        <Price>
          <span>$</span>
          <strong>2,99</strong>
        </Price>
        <QuantityContainer>
          <DecrementButton>
            <Minus size={32} />
          </DecrementButton>
          <QuantityInput value={0} disabled onChange={() => {}} />
          <IncrementButton>
            <Plus size={32} />
          </IncrementButton>
        </QuantityContainer>
        <AddToCartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </AddToCartContainer>
    </CoffeeContainer>
  )
}
