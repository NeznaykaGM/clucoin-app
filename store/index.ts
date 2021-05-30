// libs
import { combineReducers } from 'redux';
// shapes
import { UIReducers } from './modules/ui';

export type RootStore = {
  ui: UIReducers;
};

export const rootStore = combineReducers<RootStore>({
  ui: require('./modules/ui').uiReducers
});
