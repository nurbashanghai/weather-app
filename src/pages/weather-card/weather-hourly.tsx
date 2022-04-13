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
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
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
      getWeatherForecast(data.coord.lon, data.coord.lat)
        .then(res => {
          console.log(res)
          setDetailedData(res)})
    }
    console.log(detailedData, 'det')
  }, [data])

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-[100vh] w-[100vw]' >
      <div className='flex justify-center items-center h-screen ' >
        <div className='bg-white rounded text-black h-[640px] w-9/12 p-9' >
          <div className='flex justify-between' >
            {
              detailedData ? (
                <div className='block' >
                    asdasd
                </div>
              ) : <>Data not loaded...</>
            }
            <button onClick={() => setShowHourModal(false)} >Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHourly;
