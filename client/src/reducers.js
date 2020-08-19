import { combineReducers } from 'redux';
import Menu from './modules/Header/reducers';
import Canvas from './modules/Canvas/reducers';
import Navigation from './modules/Skill/reducers';
import Foot from './modules/Footer/reducers';
import Modal_form from './modules/Modal_form/reducers';
import Scroll from './modules/Menu/reducers'

export default combineReducers({
  Menu,
  Canvas,
  Navigation,
  Foot,
  Modal_form,
  Scroll
});