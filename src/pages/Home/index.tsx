import { Banner } from './components/Banner'
import {
  BannerContainer,
  BenefitsContainer,
  CoffeeList,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList></CoffeeList>
    </HomeContainer>
  )
}
