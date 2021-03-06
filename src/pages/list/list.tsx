import React, { useState } from 'react';

import AddCity from './add-city';
import ListItem from './list-item';

import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux';
import { commonSelectors } from '../../store/common';

const List = () => {

  const listData = useSelector(commonSelectors.listData);

  return (
    <div className='bg-white h-[95vh] md:rounded-l-lg p-5' >
      <AddCity />
      <div className='overflow-auto h-[65vh] rounded border mr-5' >
        {listData.length ? (
          listData.map((city: any) => (
            <ListItem location={city} />
          ))
        ) : (
          <div className='text-center text-slate-500'>Saved cities will be here...</div>
        )
        }
      </div>

    </div>
  );
};

export default List;