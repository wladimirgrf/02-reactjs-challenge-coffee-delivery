import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Coffee, cartReducer } from '../reducers/cart/reducer'
import {
  addCoffeeAction,
  increaseTheAmountOfCoffeeAction,
  reduceTheAmountOfCoffeeAction,
  removeCoffeeAction,
  resetTheCartAction,
} from '../reducers/cart/actions'

interface CartContextType {
  cartCoffees: Coffee[]
  addCoffee: (data: Coffee) => void
  increaseTheAmountOfCoffee: (coffeeId: number) => void
  reduceTheAmountOfCoffee: (coffeeId: number) => void
  removeCoffee: (coffeeId: number) => void
  resetTheCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartCoffees: [] },
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

  const { cartCoffees } = cartState

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

  function resetTheCart() {
    dispatch(resetTheCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        addCoffee,
        increaseTheAmountOfCoffee,
        reduceTheAmountOfCoffee,
        removeCoffee,
        resetTheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
