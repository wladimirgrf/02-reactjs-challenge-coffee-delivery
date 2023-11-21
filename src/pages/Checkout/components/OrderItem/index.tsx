import { useContext } from 'react'
import { Trash } from '@phosphor-icons/react'

import {
  ItemContainer,
  ItemMiddleSection,
  ItemOptions,
  RemoveButton,
} from './styles'

import { InputNumber } from '../../../../components/InputNumber'
import { CartContext } from '../../../../contexts/CartContext'

interface OrderProps {
  id: number
  name: string
  image: string
  amount: number
  price: number
}

export function OrderItem(props: OrderProps) {
  const { increaseTheAmountOfCoffee, reduceTheAmountOfCoffee, removeCoffee } =
    useContext(CartContext)

  function handleIncreaseTheItemAmount() {
    if (props.amount < 9) {
      increaseTheAmountOfCoffee(props.id)
    }
  }

  function handleReduceTheItemAmount() {
    if (props.amount > 1) {
      reduceTheAmountOfCoffee(props.id)
    }
  }

  function handleRemoveOrder() {
    removeCoffee(props.id)
  }

  return (
    <ItemContainer>
      <img src={`src/assets/coffee/${props.image}`} alt="" />
      <ItemMiddleSection>
        <p>{props.name}</p>
        <ItemOptions>
          <InputNumber
            amount={props.amount}
            increaseTheAmount={handleIncreaseTheItemAmount}
            reduceTheAmount={handleReduceTheItemAmount}
          />

          <RemoveButton onClick={handleRemoveOrder}>
            <Trash size={16} />
            REMOVE
          </RemoveButton>
        </ItemOptions>
      </ItemMiddleSection>
      <strong>$ {props.price}</strong>
    </ItemContainer>
  )
}
