import {  applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk }from 'redux-thunk';
import { theamreducer } from './reducer';

const Reducer = combineReducers({
  theam: theamreducer,
});


const store = legacy_createStore(Reducer, applyMiddleware(thunk));

export default store;