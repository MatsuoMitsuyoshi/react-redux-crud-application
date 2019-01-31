//全てのreducerを結合して状態管理するファイル
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
