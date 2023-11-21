import { useContext, useState, useEffect } from 'react'
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

import { CartContext } from '../../../../contexts/CartContext'
import { InputNumber } from '../../../../components/InputNumber'

interface CoffeeProps {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  price: number
}

export function Coffee(props: CoffeeProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const { cartCoffees, addCoffee } = useContext(CartContext)

  useEffect(() => {
    if (cartCoffees && cartCoffees.length > 0) {
      const coffeeFound = cartCoffees.find((coffee) => coffee.id === props.id)
      const amount = coffeeFound?.amount || 1

      setCoffeeAmount(amount)
    }
  }, [cartCoffees, props.id])

  function handleIncreaseTheAmountOfCoffee() {
    if (coffeeAmount < 9) {
      setCoffeeAmount(coffeeAmount + 1)
    }
  }

  function handleReduceTheAmountOfCoffee() {
    if (coffeeAmount > 1) {
      setCoffeeAmount(coffeeAmount - 1)
    }
  }

  function handleAddToCart() {
    addCoffee({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      amount: coffeeAmount,
    })
  }

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

        <InputNumber
          amount={coffeeAmount}
          increaseTheAmount={handleIncreaseTheAmountOfCoffee}
          reduceTheAmount={handleReduceTheAmountOfCoffee}
        />

        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={20} weight="fill" />
        </AddToCartButton>
      </AddToCartContainer>
    </CoffeeContainer>
  )
}
