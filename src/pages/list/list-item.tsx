import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { refreshCityWeather } from '../../api/requests';
import { commonActions, commonSelectors } from '../../store/common';
import { saveToLocalStorage } from '../../utils/local-storage';
import { useActions } from '../../utils/use-actions';

type Props = {
  location: any
}

const ListItem: React.FC<Props> = ({ location }: any) => {
  const [city, setCity] = useState(location)
  const [loading, setLoading] = useState(false)
  const listData = useSelector(commonSelectors.listData);
  const { getSavedCities } = useActions(commonActions);
  const { getWeatherAction } = useActions(commonActions)
  const removeCity = () => {
    const arr = listData.filter((item: any) => item.name !== city.name)
    saveToLocalStorage(arr)
    getSavedCities()
  }

  const refreshWeather = async (e: any) => {
    e.stopPropagation()
    setLoading(true)
    const res = await refreshCityWeather(city.name)
    setCity(res.data)
    setLoading(false)
  }

  const chooseCityToDisplay = () => {
    getWeatherAction(city.name)
  }

  return (
    <article onClick={chooseCityToDisplay} className="flex items-start text-white space-x-6 p-6 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-slate-800 ring-1 ring-slate-200 shadow-sm">
      <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" width="60" height="88" />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-white truncate pr-20">{city.name}</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div onClick={removeCity} className="absolute top-6 hover:bg-red-600 rounded p-1 right-0 flex items-center space-x-1 cursor-pointer">
            <dd>remove</dd>
          </div>
        </dl>
        <div>{city.main.temp} Celcius</div>
        <div>{city.weather[0].main}</div>
      </div>
      <button disabled={loading} onClick={refreshWeather} className="h-10 px-6 mt-5 font-semibold rounded-full border-slate-200 bg-violet-300 text-slate-900 hover:bg-violet-600 cursor-pointer">
        {loading ? 'refreshing...' : 'refresh'} 
      </button>
    </article>
  )
}

export default ListItem;