import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

const WatchedVideos = () => {
    const videos = useSelector((state) => state.videos.videos.filter((v)=>v?.watched))

    return (
        <div>
            <ul className="divide-y divide-slate-200">
            {videos.map((video) => <VideoItem video={video} key={video?.id}></VideoItem>)}</ul>
        </div>
    );
};

export default WatchedVideos;