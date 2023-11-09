import { Banner } from './components/Banner'
import { Coffee } from './components/Coffee'

import { CoffeeList, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList>
        <h2>Our coffees</h2>
        <Coffee></Coffee>
      </CoffeeList>
    </HomeContainer>
  )
}
