import { combineReducers } from "redux";

import publicSettings from "./slices/publicSettings/index";

const rootReducer = combineReducers({ publicSettings });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
