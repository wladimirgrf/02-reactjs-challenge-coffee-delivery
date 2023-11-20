import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Coffee, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeAction,
  increaseTheAmountOfCoffeeAction,
  reduceTheAmountOfCoffeeAction,
  removeCoffeeAction,
} from '../reducers/cart/actions'

interface CartContextType {
  coffees: Coffee[]
  addCoffee: (data: Coffee) => void
  increaseTheAmountOfCoffee: (coffeeId: number) => void
  reduceTheAmountOfCoffee: (coffeeId: number) => void
  removeCoffee: (coffeeId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { coffees: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const { coffees } = cartState

  function addCoffee(data: Coffee) {
    dispatch(addCoffeeAction(data))
  }

  function increaseTheAmountOfCoffee(coffeeId: number) {
    dispatch(increaseTheAmountOfCoffeeAction(coffeeId))
  }

  function reduceTheAmountOfCoffee(coffeeId: number) {
    dispatch(reduceTheAmountOfCoffeeAction(coffeeId))
  }

  function removeCoffee(coffeeId: number) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffee,
        increaseTheAmountOfCoffee,
        reduceTheAmountOfCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
