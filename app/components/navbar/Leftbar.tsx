import React from 'react';

const styles = {
  appearance: "bg-primary fixed left-0 top-0"
}

const Leftbar = () => {
  return (
    <div className='bg-primary fixed left-0 top-0 h-screen w-[100px] flex flex-col justify-start gap-10 items-center z-20'>
      <div className='mt-6'>
        Logo
      </div>

      <ul className='flex flex-col justify-start items-center gap-4'>
        <li>Home</li>
        <li>Settings</li>
        <li>About</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Leftbar