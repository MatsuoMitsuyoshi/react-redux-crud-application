//全てのreducerを結合して状態管理するファイル
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

export default combineReducers({ events, form })
