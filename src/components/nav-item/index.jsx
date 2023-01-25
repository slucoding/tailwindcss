import React from 'react';
import { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

export const NavItem = ({ text='', children }) => {
  const [ selected, setSelected ] = useState('');
  return (
    <div className='relative'>
      <div className='flex space-x-2 hover:text-gray-400 active:text-red-100 cursor-pointer items-center'>
        <span 
          className='text-meduim-gray hover:text-almost-black'
          onClick={() => children && setSelected( text !== selected ? text: '' )}
        >
          { text }
        </span>
        { children && selected !== text && <ArrowDownIcon /> }
        { children && selected === text && <ArrowUpIcon /> }
      </div> 
      { selected && children }    
    </div>
  ) 
}
// NavItem - Пункты Главного меню. 
// onClick - События Пунктов. Открывает дочерний элемент. 