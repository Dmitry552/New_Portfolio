import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Skill, CanvasModul, Footer, ModalForm } from './modules';
import {Work} from './components'

import './styles/app.scss';

class App extends Component {
  

  render() {
    var {foot} = this.props;
    return (
      <div >
        {<CanvasModul />}
        {<Skill />}
        {<Work />}
        {<Footer />}
    {foot ? <ModalForm /> : ''}
      </div>
      
    );
  }
}

export default connect(
  ({Foot, Canvas}) => ({foot: Foot.modal_form})
)(App);
