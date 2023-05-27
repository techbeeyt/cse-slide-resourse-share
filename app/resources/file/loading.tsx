import PageContainer from '@/app/components/container/PageContainer'
import { useRouter } from 'next/navigation';
import { HiArrowSmLeft } from 'react-icons/hi'

const LoadingFilePage = () => {
  return (
    <PageContainer>
      <div className="pr-4">
        <div className="bg-black/40 px-2 py-3 rounded-md text-xl font-semibold flex flex-row justify-start items-center gap-4">
          <button className="text-3xl">
            <HiArrowSmLeft />
          </button>
          Loading file..
        </div>
        <div className="flex flex-col justify-center items-center mt-32 gap-2 -translate-x-[20px]">
          <span>Click the button to open the file</span>
          <button className="bg-sky-500/70 px-4 py-2 rounded text-white">View File</button>
        </div>
      </div>
    </PageContainer>
  )
}

export default LoadingFilePage
