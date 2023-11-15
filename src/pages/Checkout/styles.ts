import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  width: 100%;
  margin: 2.5rem auto;

  display: flex;
  justify-content: space-between;
`

export const CustomerForm = styled.form`
  max-width: 40rem;
  width: 100%;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const Input = styled.input`
  padding: 0.75rem;

  border: none;
  box-shadow: none;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`

export const AddressInfo = styled.div`
  background: ${(props) => props.theme['gray-200']};

  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentInfo = styled.div`
  background: ${(props) => props.theme['gray-200']};
`

export const OrderContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  margin-left: 2rem;

  display: flex;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const OrderInfo = styled.div`
  background: ${(props) => props.theme['gray-200']};
`
