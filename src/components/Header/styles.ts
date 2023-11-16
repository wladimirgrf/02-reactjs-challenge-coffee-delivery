import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 1020px) {
    margin: 1rem 0 0 0;
    padding: 0 1rem;
  }
`

const BaseNavContainer = styled(NavLink)`
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

export const LocationContainer = styled(BaseNavContainer)`
  gap: 0.25rem;
  font-size: 14px;

  background-color: ${(props) => props.theme['purple-200']};
  color: ${(props) => props.theme['purple-500']};

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['purple-200']};
  }

  &.active {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }
`

export const CartContainer = styled(BaseNavContainer)`
  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-800']};

  &:hover {
    background-color: ${(props) => props.theme['yellow-800']};
    color: ${(props) => props.theme['yellow-200']};
  }

  &.active {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-800']};
  }
`
