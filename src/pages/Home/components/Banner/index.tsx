import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

import coffee from '../../../../assets/coffee.svg'
import backgroundImage from '../../../../assets/banner-bg.png'

import {
  BackgroundContainer,
  BannerContainer,
  BannerInfo,
  BannerImage,
  BenefitsList,
  BenefitsItem,
} from './styles'

export function Banner() {
  return (
    <BackgroundContainer $backgroundImage={backgroundImage}>
      <BannerContainer>
        <BannerInfo>
          <h1>Find the perfect coffee for any time of the day</h1>
          <h3>
            With Coffee Delivery you receive your coffee wherever you are,
            anytime
          </h3>
          <BenefitsList>
            <BenefitsItem $iconBgColor="yellow-800">
              <ShoppingCart size={16} weight="fill" />
              <span>Simple and secure purchase</span>
            </BenefitsItem>
            <BenefitsItem $iconBgColor="gray-700">
              <Package size={16} weight="fill" />
              <span>Packaging keeps the coffee intact</span>
            </BenefitsItem>
            <BenefitsItem $iconBgColor="yellow-500">
              <Timer size={16} weight="fill" />
              <span>Fast and tracked delivery</span>
            </BenefitsItem>
            <BenefitsItem $iconBgColor="purple-500">
              <Coffee size={16} weight="fill" />
              <span>The coffee arrives fresh to you</span>
            </BenefitsItem>
          </BenefitsList>
        </BannerInfo>
        <BannerImage src={coffee} alt="" />
      </BannerContainer>
    </BackgroundContainer>
  )
}
