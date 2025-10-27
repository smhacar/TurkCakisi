import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        command: commandReducer,
    },
});
export default store