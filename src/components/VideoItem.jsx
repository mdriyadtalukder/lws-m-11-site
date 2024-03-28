import { useDispatch } from "react-redux";
import { editVideos } from "../features/videos/videosSlice";

const VideoItem = ({ video }) => {
    const { title, link, watched, id } = video || {};
    const dispatch = useDispatch();
    const handleEditing = (e) => {
        e.preventDefault();
        dispatch(editVideos(id))
    }
    return (
        <li className="flex justify-between py-2">
            <a href={link}>{title}</a>
            <span
                onClick={handleEditing} className="text-sm cursor-pointer"

            >
                {watched ? '❌' : '✅'}
            </span>
        </li>
    );
};

export default VideoItem;