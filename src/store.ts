import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AsyncAction = (
  dispatch: typeof store.dispatch,
  getState: typeof store.getState
) => Promise<any>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<
  ReturnType<typeof store.getState>,
  AsyncAction,
  ReturnType<typeof store.dispatch>
>;
