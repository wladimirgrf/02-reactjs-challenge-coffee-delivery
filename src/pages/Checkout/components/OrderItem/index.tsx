import { Trash } from '@phosphor-icons/react'

import {
  ItemContainer,
  ItemMiddleSection,
  ItemOptions,
  RemoveButton,
} from './styles'

import traditional from '../../../../assets/coffee/traditional.svg'
import { InputNumber } from '../../../../components/InputNumber'

export function OrderItem() {
  return (
    <ItemContainer>
      <img src={traditional} alt="" />
      <ItemMiddleSection>
        <span>Traditional Express</span>
        <ItemOptions>
          <InputNumber />
          <RemoveButton>
            <Trash size={16} />
            REMOVE
          </RemoveButton>
        </ItemOptions>
      </ItemMiddleSection>
      <strong>$ 9,90</strong>
    </ItemContainer>
  )
}
