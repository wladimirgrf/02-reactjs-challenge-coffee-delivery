import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
`
