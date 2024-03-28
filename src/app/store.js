import { configureStore } from "@reduxjs/toolkit";
import VideosSlice from "../features/videos/videosSlice";
import filterSlice from "../features/filters/filterSlice";

export const store = configureStore({
    reducer: {
        videos: VideosSlice,
        filters: filterSlice,
    }
})