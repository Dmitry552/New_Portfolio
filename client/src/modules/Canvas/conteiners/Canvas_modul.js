import React, { Component } from 'react';
import Draw from './canvas';
import { HeaderModul } from '../../index';
import { connect } from 'react-redux';
import {window_size, canvas_block} from '../actions';

import './Canvas_modul.scss';


class CanvasModul extends Component {

  /*UNSAFE_componentWillMount() {
    const {window_size} = this.props;
    window_size();
  }*/

  componentDidMount() {
    const {window_size} = this.props
    window.addEventListener('resize', window_size);
    var can = this.refs.canvas;
    var cnx = this.refs.canvas.getContext('2d');
    window_size();
    Draw(cnx, can);
  }

  shouldComponentUpdate(nextProps) {
    let {style} = this.props
    if(style !== nextProps) return true
  }

  componentDidUpdate() {
    var can = this.refs.canvas;
    var cnx = this.refs.canvas.getContext('2d');
    Draw(cnx, can);
  }

  render() {
    let {style} = this.props;
    return (
      <div className="header" >
        <canvas ref='canvas' id="can" width={style.width} height={style.height}></canvas>
        <HeaderModul style={style}/>
      </div>
    );
  }
}

var mapStateToProps = ({Canvas}) => ({
  style: Canvas.style
});

var mapDispatchToProps = {
  window_size,
  canvas_block
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasModul);