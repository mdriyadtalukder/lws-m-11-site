import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

const Allvideos = () => {
    const videos = useSelector((state) => state.videos.videos)
    const filter = useSelector((state) => state.filters.filter);
    console.log(filter)

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {videos.filter((video) => {
                    if (filter === 'unWatched') {
                        return !video?.watched;
                    }
                    else if (filter === 'watched') {
                        return video?.watched;
                    }
                    else {
                        return true;
                    }
                })
                    .map((video) => <VideoItem video={video} key={video?.id}></VideoItem>)}
            </ul>
        </div>
    );
};

export default Allvideos;