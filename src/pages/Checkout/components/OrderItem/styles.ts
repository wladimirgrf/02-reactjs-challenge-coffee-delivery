import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
  }
`

export const ItemMiddleSection = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ItemOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 5.688rem;
  height: 2.375rem;
  margin-left: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-700']};

  border: none;
  box-shadow: none;
  background: ${(props) => props.theme['gray-400']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-800']};
  }
`
