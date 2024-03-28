import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../features/videos/videosSlice";

const AddVideo = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videos.videos)
    const iid = videos.length + 1;

    const handleAdding = (e) => {
        e.preventDefault();
        dispatch(addVideos({
            id: Number(iid),
            title: "New techniques!!!",
            link: "https://youtu.be/91HdW69lAVo",
            watched: false,
        }))
    }
    return (
        <div className="flex justify-end">
            <button
                onClick={handleAdding} className="px-3 py-2 bg-violet-600 text-white text-sm rounded-full"
            >
                Add Video
            </button>
        </div>
    );
};

export default AddVideo;