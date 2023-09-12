import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/Reviews";
import storyReducer from "./reducers/Stories";
import portfolioReducer from "./reducers/Portfolio";

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    stories: storyReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
