import React, { MouseEventHandler } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose?: MouseEventHandler<HTMLDivElement>;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  onClose
}) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(e.target === e.currentTarget.children[0]) {
      onClose?.(e);
    }
  }
  return (
    <div
      id="modalContainer"
      className='
        fixed inset-0 bg-black/60 z-50
      '
      onClick={handleClose}
    >
      {children}
    </div>
  )
}

export default ModalContainer