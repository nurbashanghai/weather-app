import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"

import { commonSelectors } from '../../store/common';

type Props = {
  setShowHourModal: (bool: boolean) => void
}

const WeatherCard: React.FC<Props> = ({setShowHourModal}) => {
  const data = useSelector(commonSelectors.data);
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <figure className="bg-slate-100 p-8 dark:bg-slate-800 w-[320px] rounded">
      <h1>{data?.name ? "Current weather:" : "Search your city"}</h1>
      <div className="pt-6 text-center space-y-4">
        {data?.name ? (
          <motion.div>
            <div className='flex items-center content-center md:ml-12' >
              <motion.img animate={{
                scale: [1, 1.2, 1, 1.3, 1],
                rotate: [0, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={'weather icon'} className={''} />
              <p>{data.weather[0].main}</p>
            </div>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {`city: ${data?.name}`}
              </div>
              <div className="text-white">
                {`${data?.main?.temp} celcius`}
              </div>
              <div className="text-white">
                {`feels like ${data?.main?.feels_like} celcius`}
              </div>
              <div className="text-white">
                {`feels like ${data?.main?.humidity}% humidity`}
              </div>
              <div className="text-white">
                {`pressure ${data?.main?.pressure} `}
              </div>
            </figcaption>
            <button onClick={() => setShowHourModal(true)} className="h-10 px-6 mt-5 font-semibold rounded-full border-slate-200 bg-violet-300 text-slate-900 hover:bg-violet-600" type="button">
              Get Hourly Forecast
            </button>
            <button className="h-10 px-6 mt-5 font-semibold rounded-full border-slate-200 bg-violet-300 text-slate-900 hover:bg-violet-600" type="button">
              Save
            </button>
          </motion.div>
        ) : <></>}

      </div>
    </figure>
  );
};

export default WeatherCard;