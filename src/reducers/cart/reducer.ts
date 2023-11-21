import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  name: string
  image: string
  price: number
  amount: number
}

interface CartState {
  cartCoffees: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const coffeeIndex = state.cartCoffees.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id,
      )

      if (coffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.cartCoffees.push(action.payload.coffee)
        })
      } else {
        return produce(state, (draft) => {
          draft.cartCoffees[coffeeIndex].amount = action.payload.coffee.amount
        })
      }
    }

    case ActionTypes.INCREASE_COFFEE_AMOUNT: {
      const coffeeIndex = state.cartCoffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cartCoffees[coffeeIndex].amount++
      })
    }

    case ActionTypes.REDUCE_COFFEE_AMOUNT: {
      const coffeeIndex = state.cartCoffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cartCoffees[coffeeIndex].amount--
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeIndex = state.cartCoffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cartCoffees.splice(coffeeIndex, 1)
      })
    }

    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.cartCoffees = []
      })
    }

    default:
      return state
  }
}
