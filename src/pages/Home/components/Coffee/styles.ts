import styled from 'styled-components'

export const CoffeeContainer = styled.article`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem;

  background: ${(props) => props.theme['gray-200']};
`

export const CoffeeImage = styled.img`
  margin-top: -1.5rem;
`

export const CoffeeTags = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    font-size: 0.625rem;
    font-weight: bold;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-800']};
    background: ${(props) => props.theme['yellow-200']};
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;

    color: ${(props) => props.theme['gray-800']};
  }

  span {
    text-align: center;
    font-size: 0.875rem;
    margin-top: 0.5rem;

    color: ${(props) => props.theme['gray-600']};
  }
`

export const AddToCartContainer = styled.div`
  margin-top: 2.063rem;

  display: flex;
  flex-direction: row;
`

export const Price = styled.div`
  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    margin-left: 0.25rem;
  }
`
