import React, { Component } from 'react';
import { MenuModul } from '../../modules'
import './Header.scss';

import icons from './icons-expand.png';

export default class Header extends Component {

  
  render() {
    var {menu, Menu, style, scroll} = this.props;
    return (
      <section  ref='_title_' className="title" style={{height: `${style.height}px`}}>
        <div className="title_button_menu">
          <div className="burger burger-3">
            <input type="checkbox" name="burger3" id="burger3"/>
            <label htmlFor="burger3" onClick={
              Menu ? menu.bind(this, false) : menu.bind(this, true)
              }><span className="bar bar-1"></span><span className="bar bar-2"></span><span className="bar bar-3"></span><span className="txt">Burger</span></label>
          </div>
        </div>
        <div className="title_name">
          <p>Сайт портфолио</p>
        </div>
        <div className="title_img">
          <div className="expand">
            <p onClick={scroll}><img alt="" src={icons}/></p>
          </div>
        </div>
        {Menu ? <MenuModul /> : ''}
      </section>
    );
  }
}