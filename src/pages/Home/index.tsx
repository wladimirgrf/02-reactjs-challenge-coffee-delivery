import { Banner } from './components/Banner'
import { Coffee } from './components/Coffee'

import coffees from './database/coffees.json'

import { CoffeeList, CoffeeSection, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <CoffeeSection>
        <h2>Our coffees</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <Coffee
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              image={coffee.image}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </CoffeeList>
      </CoffeeSection>
    </HomeContainer>
  )
}
