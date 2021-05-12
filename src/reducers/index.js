// 全reducerを総括する役目

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })