import { Reducer, AnyAction } from 'redux';

export type MealItem = {
  id: number;
  image: string;
  label: string;
  type: string;
}

type State = {
  isLogin: boolean
  mealHistory: MealItem[]
}

const randomId = () => {
  return Math.floor(Math.random() * 999)
}

const initState: State = {
  isLogin: false,
  mealHistory: [
    { id: randomId(), image: '/images/m01.jpg', label: '05.21.Morning', type: 'morning' },
    { id: randomId(), image: '/images/m02.jpg', label: '05.21.Morning', type: 'morning' },
    { id: randomId(), image: '/images/m03.jpg', label: '05.21.Lunch', type: 'lunch' },
    { id: randomId(), image: '/images/l01.jpg', label: '05.21.Snack', type: 'snack' },
    { id: randomId(), image: '/images/l02.jpg', label: '05.21.Snack', type: 'snack' },
    { id: randomId(), image: '/images/l03.jpg', label: '05.20.Lunch', type: 'lunch' },
    { id: randomId(), image: '/images/m03.jpg', label: '05.21.Lunch', type: 'lunch' },
    { id: randomId(), image: '/images/m01.jpg', label: '05.21.Morning', type: 'morning' },
  ]
}


export const rootReducer: Reducer<State, AnyAction> = (state = initState, action) => {
  console.log(initState)
  console.log(action)

  return state; 
}