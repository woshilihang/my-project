import { ADD_TODO, SYNC_DATA, ASYNC_DATA } from "./constants";
import { Dispatch } from "redux";

export function dataSync() {
  const syncData = {
    type: SYNC_DATA,
    payload: {
      data: "this is syncData",
    },
  };
  return syncData;
}

export function dataAsync() {
  return (dispatch: Dispatch) => {
    const asyncData = {
      type: ASYNC_DATA,
      payload: {
        data: "this is asyncData",
      },
    };
    setTimeout(() => {
      dispatch(asyncData);
    }, 2000);
  };
}
