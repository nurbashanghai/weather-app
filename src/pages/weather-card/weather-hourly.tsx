import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getWeatherForecast } from '../../api/requests';
import { commonSelectors } from '../../store/common';

type Props = {
  setShowHourModal: (bool: boolean) => void
}

const data2 = [
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const WeatherHourly: React.FC<Props> = ({ setShowHourModal }) => {
  const data = useSelector(commonSelectors.data)
  const [detailedData, setDetailedData] = useState<any>(null)

  useEffect(() => {
    if (data?.name) {
      getWeatherForecast(data.coord.lat, data.coord.lon)
        .then(res => {
          const hourlyData = res.list.map((day: any) => {
            return {
              name: day.dt_txt,
              temp: day.main.temp,
            }
          })
          setDetailedData(hourlyData)
        })
    }
  }, [data])

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50  h-[100vh] w-[100vw]' >
      <div className='flex justify-center items-center h-screen ' >
        <div className='bg-white rounded text-black h-[540px] w-9/12 p-9' >
          <h1>Weather detailed graph in Celcius (scroll right)</h1>
          <div className='flex justify-between' >
            <div className='overflow-auto overflow-x-scroll mt-10' >
              <LineChart width={2000} height={200} data={detailedData}>
                <XAxis dataKey="name" />
                <YAxis dataKey={"temp"} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={1} />
              </LineChart>
            </div>
          </div>
          <button className="h-10 px-6 mt-5 font-semibold rounded-full border-slate-200 bg-violet-300 text-slate-900 hover:bg-violet-600" onClick={() => setShowHourModal(false)} >Close</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherHourly;
