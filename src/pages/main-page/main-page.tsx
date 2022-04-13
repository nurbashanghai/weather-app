import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import List from '../list/list';
import WeatherCard from '../weather-card/weather-card';
import './style.modules.css';
import WeatherHourly from '../weather-card/weather-hourly';
import { useActions } from '../../utils/use-actions';
import { commonActions } from '../../store/common';

const MainPage = () => {
  const { getSavedCities } = useActions(commonActions);
  useEffect(() => {
    getSavedCities()
  },[])
  const [showHourModal, setShowHourModal] = useState(false);
  return (
    <div>
      <Container>
        <div className='md:flex' >
          <div className='leftside-bg  flex items-center justify-center' >
            <List/>
          </div>
          <div className='rightside-bg text-center w-7/12 flex flex-col items-center justify-center' >
            <WeatherCard setShowHourModal={setShowHourModal} />
            {
              showHourModal ? (
                <WeatherHourly setShowHourModal={setShowHourModal} />
              ) : <></>
            }
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;