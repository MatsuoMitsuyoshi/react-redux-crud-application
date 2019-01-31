//全てのreducerを結合して状態管理するファイル
import { combineReducers } from 'redux';
import events from './events';

export default combineReducers({ events })
