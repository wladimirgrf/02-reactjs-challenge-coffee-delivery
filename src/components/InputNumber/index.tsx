import { Minus, Plus } from '@phosphor-icons/react'

import {
  DecrementButton,
  IncrementButton,
  InputNumberContainer,
  QuantityInput,
} from './styles'

export function InputNumber() {
  return (
    <InputNumberContainer>
      <DecrementButton>
        <Minus size={32} />
      </DecrementButton>
      <QuantityInput value={0} disabled onChange={() => {}} />
      <IncrementButton>
        <Plus size={32} />
      </IncrementButton>
    </InputNumberContainer>
  )
}
