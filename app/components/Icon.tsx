import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  name: IconType;
  responsiveClass?: string;
}

const Icon: React.FC<IconProps> = ({
  name: Icon,
  responsiveClass
}) => {
  return (
    <div
      className={responsiveClass}
    >
      <Icon />
    </div>
  )
}

export default Icon
