import {
  AddToCartContainer,
  CoffeeContainer,
  CoffeeImage,
  CoffeeInfo,
  CoffeeTags,
  Price,
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
      </AddToCartContainer>
    </CoffeeContainer>
  )
}
