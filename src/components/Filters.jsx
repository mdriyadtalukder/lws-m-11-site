import { useDispatch } from "react-redux";
import { filtering } from "../features/filters/filterSlice";

const Filters = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex space-x-4">
            <span className="text-sm">Filter by:</span>
            <button onClick={() => dispatch(filtering('all'))} className="text-sm" >
                All
            </button>
            <button onClick={() => dispatch(filtering('unWatched'))} className="text-sm">
                ✅
            </button>
            <button onClick={() => dispatch(filtering('watched'))} className="text-sm" >
                ❌
            </button>
        </div>
    );
};

export default Filters;