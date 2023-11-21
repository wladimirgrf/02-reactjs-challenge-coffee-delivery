import { Minus, Plus } from '@phosphor-icons/react'

import {
  DecrementButton,
  IncrementButton,
  InputNumberContainer,
  QuantityInput,
} from './styles'

interface InputNumberProps {
  amount: number
  increaseTheAmount: () => void
  reduceTheAmount: () => void
}

export function InputNumber({
  amount,
  increaseTheAmount,
  reduceTheAmount,
}: InputNumberProps) {
  return (
    <InputNumberContainer>
      <DecrementButton onClick={reduceTheAmount} type="button">
        <Minus size={32} />
      </DecrementButton>
      <QuantityInput value={amount} disabled onChange={() => {}} />
      <IncrementButton onClick={increaseTheAmount} type="button">
        <Plus size={32} />
      </IncrementButton>
    </InputNumberContainer>
  )
}
