import React from 'react';

const Button = ({children}) => {
  return (
    <button className='sm:px-5 px-3 py-2 sm:py-3 bg-primary text-base-100 rounded-md'>
      {children}
    </button>
  );
};

export default Button;