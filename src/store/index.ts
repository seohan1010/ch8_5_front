import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { rootSaga } from "./saga";

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
reducer:rootReducer,
middleware:(getDefaultMiddleware) =>getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(sagaMiddleware)
});

export default store;
sagaMiddleware.run(rootSaga);

