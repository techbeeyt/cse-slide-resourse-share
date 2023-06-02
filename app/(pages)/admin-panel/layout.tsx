import PageContainer from '@/app/components/container/PageContainer';
import React from 'react';


const layout = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  )
}

export default layout
