import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) => props.theme['gray-400']};
`

const BaseQuantityButton = styled.button`
  width: 0.875rem;
  height: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  box-shadow: none;

  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};

  &:hover {
    color: ${(props) => props.theme['purple-800']};
  }
`

export const QuantityInput = styled.input`
  width: 1.25rem;
  height: 1.313rem;
  margin: 0 5px;
  text-align: center;
  font-size: 1rem;

  border: none;
  background-color: transparent;
  box-shadow: none;
`

export const DecrementButton = styled(BaseQuantityButton)``

export const IncrementButton = styled(BaseQuantityButton)``
