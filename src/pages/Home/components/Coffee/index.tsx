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

import { InputNumber } from '../../../../components/InputNumber'

interface CoffeeProps {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  price: string
}

export function Coffee(props: CoffeeProps) {
  return (
    <CoffeeContainer>
      <CoffeeImage src={`src/assets/coffee/${props.image}`}></CoffeeImage>
      <CoffeeTags>
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeInfo>
        <strong>{props.name}</strong>
        <span>{props.description}</span>
      </CoffeeInfo>
      <AddToCartContainer>
        <Price>
          <span>$</span>
          <strong>{props.price}</strong>
        </Price>
        <InputNumber />
        <AddToCartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </AddToCartContainer>
    </CoffeeContainer>
  )
}
