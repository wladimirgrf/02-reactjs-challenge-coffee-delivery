import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  INCREASE_COFFEE_AMOUNT = 'INCREASE_COFFEE_AMOUNT',
  REDUCE_COFFEE_AMOUNT = 'REDUCE_COFFEE_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffee },
  }
}

export function increaseTheAmountOfCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE_AMOUNT,
    payload: { coffeeId },
  }
}

export function reduceTheAmountOfCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REDUCE_COFFEE_AMOUNT,
    payload: { coffeeId },
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { coffeeId },
  }
}

export function resetTheCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
