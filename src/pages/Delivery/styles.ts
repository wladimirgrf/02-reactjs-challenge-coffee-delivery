import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 5rem auto 0;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-800']};
    line-height: 1.3;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme['gray-800']};
  }

  section {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
  }
`

export const DeliveryInfo = styled.div`
  width: 100%;
  max-width: 32.875rem;

  display: flex;
  flex-direction: column;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-clip: content-box, border-box;
  background-origin: border-box;

  background-image: linear-gradient(
      ${(props) => props.theme['gray-100']},
      ${(props) => props.theme['gray-100']}
    ),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['purple-500']}
    );
`

const ICON_BG_COLORS = {
  'yellow-800': 'yellow-800',
  'yellow-500': 'yellow-500',
  'purple-500': 'purple-500',
}

interface TopicProps {
  $iconBgColor: keyof typeof ICON_BG_COLORS
}

export const DeliveryTopic = styled.div<TopicProps>`
  width: 100%;
  max-width: 22.125rem;
  margin: 2.5rem 0 0 2.5rem;
  gap: 0.75rem;

  display: flex;
  align-items: flex-start;

  svg {
    background: ${(props) => props.theme[ICON_BG_COLORS[props.$iconBgColor]]};
    color: ${(props) => props.theme['gray-100']};

    box-sizing: content-box;
    padding: 0.5rem;
    border-radius: 50%;
  }
`
