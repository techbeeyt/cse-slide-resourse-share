import React from 'react';

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({
  children
}) => {
  return (
    <div className='mt-[80px] ml-[100px]'>
      {children}
    </div>
  )
}

export default PageContainer