
import './App.css'
import AddVideo from './components/AddVideo'
import Allvideos from './components/Allvideos'
import WatchedVideos from './components/WatchedVideos'
import Filters from './components/Filters'

function App() {

  return (
    <div className="w-screen h-screen p-20">
      <div className="flex w-full">
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400 flex justify-between items-center">
            <span className="font-bold">All Videos</span>
            <Filters></Filters>
          </div>
          <Allvideos></Allvideos>
          <AddVideo></AddVideo>
        </div>
        <div className="w-full border border-slate-400 p-6 space-y-8">
          <div className="border-b py-2 border-slate-400">
            <span className="font-bold">Watched Videos</span>
          </div>
          <WatchedVideos></WatchedVideos>
        </div>
      </div>
    </div>

  )
}

export default App
