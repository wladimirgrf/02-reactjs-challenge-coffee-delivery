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

export const AddressInfo = styled.div`
  background: ${(props) => props.theme['gray-200']};

  display: flex;
  flex-wrap: wrap;

  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.938rem;
`

export const AddressSection = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-800']};
  }

  p {
    display: flex;
    flex-direction: column;
    line-height: 1.4;
  }

  strong {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['gray-800']};
  }

  span {
    font-size: 0.875rem;
    font-weight: normal;
    color: ${(props) => props.theme['gray-700']};
  }
`

const Input = styled.input`
  padding: 0.75rem;

  border: none;
  box-shadow: none;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  & + & {
    margin-top: 1rem;
  }
`

export const FirstInput = styled(Input)`
  flex: 0 0 auto;
`

export const InputLarge = styled(Input)`
  flex: 1 1 100%;
`

export const InputSmall = styled(Input)`
  width: 33.333%;

  & + & {
    width: calc(33.333% - 0.75rem);
    margin-left: 0.75rem;
  }
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
