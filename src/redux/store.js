import { createStore, combineReducers } from "redux";
import userReducer from "../redux/reducers/userReducers";
import allUsersReducer from "./reducers/allUsersReducer";
import filterReducer from "./reducers/filterReducer";
// import function create store
import { configureStore } from '@reduxjs/toolkit'
// export store
import reducers from './modal/reducers'

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: allUsersReducer,
  user: userReducer,
  showModal: reducers.modalReducer,
}, localStorage.contacts);

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}
const store = createStore(
  rootReducer,
  persistedState //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
