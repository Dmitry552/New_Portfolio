import React, { Component } from 'react';
import Generally from '../Generally';
import Back from '../Back';
import './Skill_list.scss';

import Html_5_logo from '../../images/HTML5_Logo_512-min.png';
import Css_logo from '../../images/css-3-png-1-min.png';
import Js_logo from '../../images/js__m-min.png';
import Gulp_logo from '../../images/gulp-2x-min.png';
import Sass_logo from '../../images/sass__k-min.png';
import Git_logo from '../../images/git-logo-png-4-min.png';
import GitHub_logo from '../../images/github__m-min.png';
import Photoshop_logo from '../../images/photosh-min.png';
import React_logo from '../../images/react-logo-png-6-min.png';

import Node_logo from '../../images/node-logo-png-2-min.png';
import express_logo from '../../images/express-js-png-7-min.png';
import mongoDB_logo from '../../images/Mongo-min.png';
import mongoose_logo from '../../images/mongoose-1-min.png';

var Imag_Front = [Html_5_logo, Css_logo, Js_logo, Gulp_logo, Sass_logo, Git_logo, GitHub_logo, Photoshop_logo, React_logo];
var Imag_Back = [Node_logo, express_logo, mongoDB_logo, mongoose_logo];

class SkillList extends Component {

  render() {
    return (
      <div className="skill_list">
        <h1>Мои знания</h1>
        <div className="skill">
          <div className="generally">
            <h2>Общие</h2>
            <Generally imag_front={Imag_Front}/>
          </div>
          <div className="back-end">
            <h2>Серверная разработка</h2>
            <Back imag_back={Imag_Back}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillList;