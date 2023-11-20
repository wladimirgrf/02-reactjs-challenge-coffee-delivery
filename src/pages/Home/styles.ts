import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const CoffeeSection = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto 4rem;

  h2 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;

    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
`
