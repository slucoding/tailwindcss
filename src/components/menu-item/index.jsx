import React from 'react';

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-full space-x-4 '>
      { icon }
      <span className='text-medium-gray hover:text-gray-400 active:text-red-100 cursor-pointer'>
        { text }
      </span>
    </div>
  )
}