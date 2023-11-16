import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import './App.css';
import { Tooltip } from '@mui/material';

const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <Tooltip title='Settings' placement='top'>
            <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
              style={{ borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>

        {activeMenu ? (
          <div
            className='w-72 fixed sidebar dark:bg-secondary-dark-bg 
          bg-white'
          >
            Sidebar
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar w-0</div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        ></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
