import React, { MouseEventHandler } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose?: MouseEventHandler<HTMLDivElement>;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  onClose
}) => {
  return (
    <div
      id="modalContainer"
      className='
        fixed inset-0 bg-black/60 z-50
      '
      onClick={onClose ? onClose : undefined}
    >
      {children}
    </div>
  )
}

export default ModalContainer