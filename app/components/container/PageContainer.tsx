import React from 'react';

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({
  children
}) => {
  return (
    <div className='pt-[80px] pl-[60px] md:pl-[90px]'>
      {children}
    </div>
  )
}

export default PageContainer