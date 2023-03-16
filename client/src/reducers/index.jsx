import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';

// key and value the same since we are only passing posts 
export const reducers = combineReducers({ posts, auth });