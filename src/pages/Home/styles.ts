import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CoffeeList = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;

    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }
`
