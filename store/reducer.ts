import { Reducer, AnyAction } from 'redux';
import { ACT_SET_LOGIN } from './actions';

export type MealItem = {
  id: number;
  image: string;
  label: string;
  type: string;
}

export type TypeArticleItem = {
  id: number;
  image: string;
  title: string;
  tags: string;
  date: string;
}

type State = {
  isLogin: boolean
  mealHistory: MealItem[]
  articles: TypeArticleItem[]
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
  ],
  articles: [
    { id: randomId(), image: '/images/column-1.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-2.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-3.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-4.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-5.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-6.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-7.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
    { id: randomId(), image: '/images/column-8.jpg', title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリべるメリべるメリ', date: '2021.05.17 23:25', tags: '#魚料理 #和食 #DHA' },
  ]
}


export const rootReducer: Reducer<State, AnyAction> = (state = initState, action) => {
  if (action.type === ACT_SET_LOGIN) {
    return {
      ...state,
      isLogin: action.payload
    }
  }

  return state; 
}