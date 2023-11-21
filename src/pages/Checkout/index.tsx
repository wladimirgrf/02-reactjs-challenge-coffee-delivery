import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderItem } from './components/OrderItem'
import {
  CheckoutForm,
  CustomerContainer,
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

import { CartContext } from '../../contexts/CartContext'

const checkoutFormValidationSchema = z.object({
  zipCode: z.string(),
  address: z.string(),
  apt: z.string(),
  city: z.string(),
  state: z.string(),
})

type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { cartCoffees } = useContext(CartContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      apt: '',
      city: '',
      state: '',
    },
  })

  const { watch, reset, handleSubmit, register } = checkoutForm

  function handleCompleteCheckout(data: CheckoutFormData) {
    console.log(data)

    // navigate('/delivery')
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(handleCompleteCheckout)} action="">
      <FormProvider {...checkoutForm}>
        <CustomerContainer>
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

            <FirstInput placeholder="Zip code" {...register('zipCode')} />
            <InputLarge placeholder="Address" {...register('address')} />
            <InputSmall placeholder="Apt / Suite / Unit" {...register('apt')} />
            <InputSmall placeholder="City" {...register('city')} />
            <InputSmall placeholder="State / Province" {...register('state')} />
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
        </CustomerContainer>
        <OrderContainer>
          <strong>Selected coffees</strong>
          <OrderInfo>
            {cartCoffees.length > 0 &&
              cartCoffees.map((coffee) => (
                <OrderItem
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  amount={coffee.amount}
                  image={coffee.image}
                />
              ))}

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
      </FormProvider>
    </CheckoutForm>
  )
}
