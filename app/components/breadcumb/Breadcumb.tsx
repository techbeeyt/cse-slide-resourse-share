import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

type parentType = {
  label: string,
  url: string
}
interface BreadCumbProps {
  parents?: parentType[];
  leaf: string | null;
}

const Breadcumb: React.FC<BreadCumbProps> = ({
  parents,
  leaf
}) => {
  return (
    <div
      className='
        flex flex-row gap-1 justify-start items-center
      '
    >
      {
        parents?.map((item) => {
          return (
            <div key={item.label} className='flex flex-row gap-1 justify-center items-center'>
              <Link href={item.url} className='text-sky-500 font-semibold text-lg'>{item.label}</Link>
              <MdOutlineArrowForwardIos />
            </div>
          )
        })
      }
      <div className='flex flex-row justify-center items-center'>
        <h2 className='text-gray-400 font-semibold'>{leaf}</h2>
        <div className='text-gray-400'><MdOutlineArrowForwardIos size={16} /></div>
      </div>
    </div>
  )
}

export default Breadcumb