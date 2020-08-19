import React, {Component} from 'react'
import {Menu} from '../../../components'
import {connect} from 'react-redux'
import {menu} from '../../Header/actions'

class MenuModul extends Component {

  scroll = (e) => {
    const scroll = document.getElementsByClassName(e)[1].getBoundingClientRect()
    window.scrollTo(0, scroll.top)
    
  }

  render () {
    return (
      <>
        <Menu scroll={this.scroll} {...this.props}/>
      </>
    )
  }
} 

var mapStateToProps = ({Menu}) => ({
  Menu_: Menu.Menu
})

var mapDispatchToProps = {
  menu
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuModul);
