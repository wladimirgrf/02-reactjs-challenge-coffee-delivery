import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

import illustration from '../../assets/delivery-illustration.svg'
import { DeliveryContainer, DeliveryInfo, DeliveryTopic } from './styles'

export function Delivery() {
  return (
    <DeliveryContainer>
      <h1>Woohoo! Order confirmed</h1>
      <h2>Now just wait and the coffee will soon reach you</h2>
      <section>
        <DeliveryInfo>
          <DeliveryTopic $iconBgColor="purple-500">
            <MapPin size={16} weight="fill" />
            <span>
              <p>
                Delivery to <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </span>
          </DeliveryTopic>
          <DeliveryTopic $iconBgColor="yellow-500">
            <Timer size={16} weight="fill" />
            <span>
              <p>Delivery forecast</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </span>
          </DeliveryTopic>
          <DeliveryTopic $iconBgColor="yellow-800">
            <CurrencyDollar size={16} />
            <span>
              <p>Payment on delivery</p>
              <p>
                <strong>Credit card</strong>
              </p>
            </span>
          </DeliveryTopic>
          <p></p>
          <p></p>
        </DeliveryInfo>
        <img src={illustration} alt="" />
      </section>
    </DeliveryContainer>
  )
}
