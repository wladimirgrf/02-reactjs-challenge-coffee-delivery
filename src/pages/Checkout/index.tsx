import { MapPinLine } from '@phosphor-icons/react'
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
        <PaymentInfo></PaymentInfo>
      </CustomerForm>
      <OrderContainer>
        <strong>Selected coffees</strong>
        <OrderInfo>
          <OrderItem />
        </OrderInfo>
      </OrderContainer>
    </CheckoutContainer>
  )
}
