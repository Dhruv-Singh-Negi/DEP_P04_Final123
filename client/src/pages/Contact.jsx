import React from 'react';

const Contact = () => {
  return (
    <div className='contact w-7/12 grid grid-cols-4'>
        <div className="content col-span-3 p-4">
            <p className='text-2xl'>Welcome to Contact Page</p>
            <p className='font-serif'>Contact Page content</p>
        </div>
        
        <div className="links col-span-1 p-4">
            <p className='text-2xl'>Other links</p>
            <p className='font-serif'>links</p>
        </div>
    </div>
  )
}

export default Contact