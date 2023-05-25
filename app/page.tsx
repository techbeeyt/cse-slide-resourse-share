import PageContainer from "./components/container/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <div className="grid grid-cols-12">
        <div className="col-span-9 py-4">
          <div className="bg-secondary p-6 rounded-3xl h-[60vh]">
            Hi
          </div>
        </div>

        <div className="col-span-3 p-4 relative">
          <div className="bg-secondary p-6 rounded-xl sticky top-[90px] left-0">
              Hi
            </div>
        </div>
      </div>
    </PageContainer>
  )
}
