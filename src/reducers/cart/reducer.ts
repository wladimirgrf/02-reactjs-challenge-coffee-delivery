import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  image: string
  price: string
  amount: number
}

interface CartState {
  coffees: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.coffee)
      })
    }

    case ActionTypes.INCREASE_COFFEE_AMOUNT: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount++
      })
    }

    case ActionTypes.REDUCE_COFFEE_AMOUNT: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount--
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      if (coffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1)
      })
    }

    default:
      return state
  }
}
