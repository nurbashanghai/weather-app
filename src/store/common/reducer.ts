import * as types from './types';

export type CommonReducer = {
  data: any, // selected city to display
  listData: [] // list of all cities that has been saved
  loading: boolean
}

const initialState: CommonReducer = {
  data: {},
  listData: [],
  loading: false
}

export const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.SET_DATA: 
      return {
        ...state,
        data: {...action.payload},
        loading: false
      }
    case types.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
        data: {}
      }
    case types.SET_SAVED_CITIES:
      return {
        ...state,
        listData: action.payload
      }
    default:
      return state
  }
}
