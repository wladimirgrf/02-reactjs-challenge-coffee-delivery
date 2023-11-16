import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

import { OrderItem } from './components/OrderItem'
import {
  CheckoutContainer,
  CustomerForm,
  OrderInfo,
  PaymentInfo,
  AddressInfo,
  OrderContainer,
  InputSmall,
  InputLarge,
  FirstInput,
  AddressSection,
  PaymentSection,
  PaymentList,
  PaymentItem,
  PriceLabel,
  PriceContainer,
  ConfirmOrderButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CustomerForm>
        <strong>Complete your order</strong>
        <AddressInfo>
          <AddressSection>
            <MapPinLine size={22} />
            <p>
              <strong>Delivery address</strong>
              <span>
                Fill in the address where you would like to receive your order
              </span>
            </p>
          </AddressSection>
          <FirstInput name="zip-code" placeholder="Zip code" />
          <InputLarge name="address" placeholder="Address" />
          <InputSmall name="apt" placeholder="Apt / Suite / Unit" />
          <InputSmall name="city" placeholder="City" />
          <InputSmall name="state" placeholder="State / Province" />
        </AddressInfo>
        <PaymentInfo>
          <PaymentSection>
            <CurrencyDollar size={22} />
            <p>
              <strong>Payment</strong>
              <span>
                Payment is made upon delivery. Choose the way you want to pay
              </span>
            </p>
          </PaymentSection>
          <PaymentList>
            <PaymentItem type="button" onClick={() => {}}>
              <CreditCard size={16} />
              CREDIT CARD
            </PaymentItem>
            <PaymentItem type="button" onClick={() => {}}>
              <Bank size={16} />
              DEBIT CARD
            </PaymentItem>
            <PaymentItem type="button" onClick={() => {}}>
              <Money size={16} />
              CASH
            </PaymentItem>
          </PaymentList>
        </PaymentInfo>
      </CustomerForm>
      <OrderContainer>
        <strong>Selected coffees</strong>
        <OrderInfo>
          <OrderItem />
          <OrderItem />
          <PriceContainer>
            <PriceLabel>
              Cart Subtotal <span>$ 29,70</span>
            </PriceLabel>
            <PriceLabel>
              Delivery <span>$ 3,50</span>
            </PriceLabel>
            <PriceLabel $bold>
              Total <span>$ 33,20</span>
            </PriceLabel>
          </PriceContainer>

          <ConfirmOrderButton type="submit">CONFIRM ORDER</ConfirmOrderButton>
        </OrderInfo>
      </OrderContainer>
    </CheckoutContainer>
  )
}
