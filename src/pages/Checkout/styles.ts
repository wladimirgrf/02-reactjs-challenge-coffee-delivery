import styled, { css } from 'styled-components'

export const CheckoutForm = styled.form`
  max-width: 70rem;
  width: 100%;
  margin: 2.5rem auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    max-width: none;
  }
`

export const CustomerContainer = styled.div`
  max-width: 40rem;
  width: 100%;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1020px) {
    max-width: none;
  }
`

const DefaultSection = styled.section`
  width: 100%;
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

export const AddressInfo = styled.div`
  background: ${(props) => props.theme['gray-200']};

  display: flex;
  flex-wrap: wrap;

  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.938rem;
`

export const AddressSection = styled(DefaultSection)`
  svg {
    color: ${(props) => props.theme['yellow-800']};
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

  display: flex;
  flex-wrap: wrap;

  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const PaymentSection = styled(DefaultSection)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PaymentList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

interface PaymentItemProps {
  $selectedOption?: boolean
}

export const PaymentItem = styled.button<PaymentItemProps>`
  width: 11.167rem;
  display: flex;
  align-items: center;

  cursor: pointer;

  border: none;
  border-radius: 6px;
  border: 1px solid transparent;
  gap: 0.75rem;
  padding: 1rem;
  font-size: 0.75rem;

  color: ${(props) => props.theme['gray-700']};
  background: ${(props) => props.theme['gray-400']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    color: ${(props) => props.theme['gray-800']};
    background: ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.$selectedOption &&
    css`
      border-color: ${(props) => props.theme['purple-500']};
      background-color: ${(props) => props.theme['purple-200']};
    `}

  @media (max-width: 1020px) {
    & + & {
      margin-left: 1rem;
    }
  }
`

export const OrderContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1020px) {
    margin-top: 1rem;
    margin-left: 0;
    max-width: none;
  }
`

export const OrderInfo = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-top: 0.938rem;
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;

  background: ${(props) => props.theme['gray-200']};
`

export const PriceContainer = styled.div`
  margin-top: 1.5rem;
`

interface PriceLabelProps {
  $bold?: boolean
}

export const PriceLabel = styled.label<PriceLabelProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.8;

  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: 1rem;
  }

  ${(props) =>
    props.$bold &&
    css`
      font-size: 1.25rem;
      font-weight: bold;

      color: ${(props) => props.theme['gray-800']};

      span {
        font-size: 1.25rem;
      }
    `}
`

export const ConfirmOrderButton = styled.button`
  border: none;
  box-shadow: none;
  cursor: pointer;

  margin-top: 1.5rem;
  padding: 0.75rem;
  width: 100%;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: bold;

  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['yellow-800']};
  }
`

interface FormErrorProps {
  $isErrorOccurred: boolean
}

export const FormError = styled.p<FormErrorProps>`
  font-size: 0.625rem;
  color: red;
  margin-bottom: 0.25rem;
  display: none;

  ${(props) =>
    props.$isErrorOccurred &&
    css`
      display: block;
    `}
`
