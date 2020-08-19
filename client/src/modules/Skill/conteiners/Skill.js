
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as canvasActions from '../actions';
import { Skill } from '../../../components';

var mapStateToProps = ({Navigation}) => ({
  Nav: Navigation.navigation
})

var mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(canvasActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
