import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  imageUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl
}) => {
  return (
    <div className='w-9 md:w-10 h-9 md:h-10 bg-gray-500 rounded-full cursor-pointer hover:outline outline-[5px] outline-gray-300/70 relative overflow-hidden'>
      {
        imageUrl && (
          <Image src={imageUrl} alt="Profile photo" fill />
        )
      }
    </div>
  )
}

export default Avatar