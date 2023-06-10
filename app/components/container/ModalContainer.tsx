import React, { MouseEventHandler } from 'react';

interface ModalContainerProps {
  children: React.ReactNode;
  onClose?: MouseEventHandler<HTMLDivElement>;
  center?: boolean;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  onClose,
  center
}) => {

  return (
    <div
      id="modalContainer"
      className={`
        fixed inset-0 bg-black/60 z-50
        ${center ? 'flex justify-center items-center' : 'flex justify-start items-start'}
      `}
      onClick={onClose ? onClose : undefined}
    >
      {children}
    </div>
  )
}

export default ModalContainer