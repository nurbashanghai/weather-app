import { Dispatch } from "redux"
import { getWeatherByLocation } from "../../api/requests"
import { getFromLocalStorage } from "../../utils/local-storage"
import * as types from "./types"

export const getWeatherAction = (location: string) => 
  async(dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(setLoadingTrue())
      const { data }: any = await getWeatherByLocation(location);
      dispatch(setWeatherToState(data))
    } catch (error: any) {
      console.log(error)
    }
  }

export const getSavedCities = () => 
  async(dispatch: Dispatch) => {
    const savedCities = getFromLocalStorage();
    dispatch(setSavedCitiesToState(savedCities));
  }
  


export const setWeatherToState = (payload: any) => {
  return { type: types.SET_DATA, payload }
}

export const setSavedCitiesToState = (payload: any) => {
  return { type: types.SET_SAVED_CITIES, payload }
}

export const setLoadingTrue = () => {
  return { type: types.SET_LOADING_TRUE }
}