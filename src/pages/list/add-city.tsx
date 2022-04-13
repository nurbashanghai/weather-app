import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { getWeatherByLocation } from '../../api/requests';
import logo from '../../assets/logo.png'
import { commonActions } from '../../store/common';
import { useActions } from '../../utils/use-actions';
import { commonSelectors } from '../../store/common';
import { useSelector } from 'react-redux';

const AddCity = () => {

  const [searchText, setSearchText] = useState('');
  const { getWeatherAction } = useActions(commonActions)
  const loading = useSelector(commonSelectors.loading);

  const submitSearch = () => {
    getWeatherAction(searchText);
  }

  return (
    <div>
      <div className="flex font-sans">
        <div className="flex-none w-56 relative">
          <img src={logo} alt="app logo" className="absolute inset-0 w-9/12 h-9/12 object-cover rounded-lg" />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto font-medium text-slate-900">
              Choose your city
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
              Weather App
            </div>
            <div className="text-sm font-medium text-slate-400">
              Open Weather Api
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm font-bold focus-none">
              <input placeholder='search' className="rounded" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button onClick={submitSearch} disabled={!searchText && !loading} className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white hover:bg-sky-700" type="submit">
                {loading ? 'Processing...' : 'Search'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCity;