import { ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CoffeeContainer,
  CoffeeImage,
  CoffeeInfo,
  CoffeeTags,
  Price,
  AddToCartContainer,
  AddToCartButton,
} from './styles'

import traditional from '../../../../assets/coffee/traditional.svg'
import { InputNumber } from '../../../../components/InputNumber'

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
        <InputNumber />
        <AddToCartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </AddToCartContainer>
    </CoffeeContainer>
  )
}
