import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
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
  FormError,
} from './styles'

import { CartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/currency'

const checkoutFormValidationSchema = z.object({
  zipCode: z.string(),
  address: z.string(),
  apt: z.string(),
  city: z.string(),
  state: z.string(),
})

enum PaymentMethod {
  'CREDIT' = 'Credit Card',
  'DEBIT' = 'Debit Card',
  'CASH' = 'Cash',
}

type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cartCoffees, resetTheCart } = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | undefined>(
    undefined,
  )

  const [paymentError, setPaymentError] = useState(false)
  const [emptyListError, setEmptyListError] = useState(false)

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

  const { handleSubmit, register } = checkoutForm

  const totalInTheCart = cartCoffees.reduce((totalAmount, coffee) => {
    return totalAmount + coffee.amount * coffee.price
  }, 0)

  const deliveryCost = 3.5

  const total = totalInTheCart + deliveryCost

  useEffect(() => {
    setEmptyListError(false)
  }, [cartCoffees])

  function handleCompleteCheckout(data: CheckoutFormData) {
    if (!paymentMethod) {
      setPaymentError(true)
      return
    }

    if (cartCoffees.length === 0) {
      setEmptyListError(true)
      return
    }

    resetTheCart()
    navigate('/delivery', { state: { ...data, paymentMethod } })
  }

  function handlePaymentMethod(method: PaymentMethod) {
    setPaymentError(false)
    setPaymentMethod(method)
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

            <FirstInput
              placeholder="Zip code"
              required
              {...register('zipCode')}
            />

            <InputLarge
              placeholder="Address"
              required
              {...register('address')}
            />

            <InputSmall placeholder="Apt / Suite / Unit" {...register('apt')} />

            <InputSmall placeholder="City" required {...register('city')} />

            <InputSmall
              placeholder="State / Province"
              required
              {...register('state')}
            />
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

            <FormError $isErrorOccurred={paymentError}>
              PAYMENT METHOD IS MANDATORY!
            </FormError>

            <PaymentList>
              <PaymentItem
                $selectedOption={paymentMethod === PaymentMethod.CREDIT}
                type="button"
                onClick={() => handlePaymentMethod(PaymentMethod.CREDIT)}
              >
                <CreditCard size={16} />
                CREDIT CARD
              </PaymentItem>
              <PaymentItem
                $selectedOption={paymentMethod === PaymentMethod.DEBIT}
                type="button"
                onClick={() => handlePaymentMethod(PaymentMethod.DEBIT)}
              >
                <Bank size={16} />
                DEBIT CARD
              </PaymentItem>
              <PaymentItem
                $selectedOption={paymentMethod === PaymentMethod.CASH}
                type="button"
                onClick={() => handlePaymentMethod(PaymentMethod.CASH)}
              >
                <Money size={16} />
                CASH
              </PaymentItem>
            </PaymentList>
          </PaymentInfo>
        </CustomerContainer>
        <OrderContainer>
          <strong>Selected coffees</strong>
          <OrderInfo>
            <FormError $isErrorOccurred={emptyListError}>
              CHOOSE A CAFE FROM THE MENU TO SEND THE ORDER!
            </FormError>

            {cartCoffees.length > 0 &&
              cartCoffees.map((coffee) => (
                <OrderItem
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  image={coffee.image}
                  amount={coffee.amount}
                  price={coffee.price}
                />
              ))}

            <PriceContainer>
              <PriceLabel>
                Cart Subtotal <span>$ {formatCurrency(totalInTheCart)}</span>
              </PriceLabel>
              <PriceLabel>
                Delivery <span>$ {formatCurrency(deliveryCost)} </span>
              </PriceLabel>
              <PriceLabel $bold>
                Total <span>$ {formatCurrency(total)}</span>
              </PriceLabel>
            </PriceContainer>

            <ConfirmOrderButton type="submit">CONFIRM ORDER</ConfirmOrderButton>
          </OrderInfo>
        </OrderContainer>
      </FormProvider>
    </CheckoutForm>
  )
}
