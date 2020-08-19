import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as canvasActions from '../actions'
import { Header } from '../../../components';

class HeaderModul extends Component {
  

  scroll = () => {
    const scroll = document.getElementsByClassName('biography')[0].getBoundingClientRect()
    window.scrollTo(0, scroll.top)
  }
  

  render () {
    return (
      <>
        <Header {...this.props} scroll={this.scroll}/>
      </>
    )
    
  }
}


var mapStateToProps = ({Canvas, Menu}) => ({
  Menu: Menu.Menu,
  //Style: Canvas.style
});

var mapDispatchToProps = dispatch => ({
  ...bindActionCreators(canvasActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderModul);