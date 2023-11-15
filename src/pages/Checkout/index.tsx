import { OrderItem } from './components/OrderItem'
import {
  CheckoutContainer,
  CustomerForm,
  OrderInfo,
  PaymentInfo,
  AddressInfo,
  OrderContainer,
  Input,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CustomerForm>
        <strong>Complete your order</strong>
        <AddressInfo>
          <Input name="zip-code" placeholder="Zip code" />
          <Input name="address" placeholder="Address" />
          <Input name="apt" placeholder="Apt / Suite / Unit" />
          <Input name="city" placeholder="City" />
          <Input name="state" placeholder="State / Province" />
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
