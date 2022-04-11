import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducer";

const initialState = {};

const middleware = [thunk];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "persist-key",
  storage,
  blacklist: ["country", "error"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export default store;
export { persistor };
