import { combineReducers } from "redux";

import posts from './posts';

// key and value the same since we are only passing posts 
export const reducers = combineReducers({ posts });