import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 9.813rem);
  margin: 0 auto;
  padding: 2rem 0;

  background: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
`
