import styled from 'styled-components'

interface BannerProps {
  $backgroundImage: string
}

export const BackgroundContainer = styled.div<BannerProps>`
  background-size: 100% auto;
  background-image: url(${(props) => props.$backgroundImage});
`

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.875rem 0;

  @media (max-width: 1020px) {
    justify-content: center;
    max-width: none;
    padding: 5.875rem 1rem;
  }
`

export const BannerImage = styled.img`
  @media (max-width: 1020px) {
    display: none;
  }
`

export const BannerInfo = styled.div`
  max-width: 36.75rem;
  line-height: 1.3;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme['gray-800']};
  }

  @media (max-width: 1020px) {
    max-width: none;
  }
`

export const BenefitsList = styled.div`
  margin-top: 4.125rem;
  gap: 1.25rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const ICON_BG_COLORS = {
  'yellow-800': 'yellow-800',
  'yellow-500': 'yellow-500',
  'purple-500': 'purple-500',
  'gray-700': 'gray-700',
}

interface BenefitsProps {
  $iconBgColor: keyof typeof ICON_BG_COLORS
}

export const BenefitsItem = styled.div<BenefitsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    background: ${(props) => props.theme[ICON_BG_COLORS[props.$iconBgColor]]};
    color: ${(props) => props.theme['gray-100']};

    box-sizing: content-box;
    padding: 0.5rem;
    border-radius: 50%;
  }
`
