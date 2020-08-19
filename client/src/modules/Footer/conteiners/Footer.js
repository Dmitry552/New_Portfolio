
import { connect } from 'react-redux';
import {Modal} from '../actions';
import { Footer } from '../../../components';

var mapStateToProps = ({Foot}) => ({
  foot: Foot.modal_form
});

var mapDispachToProps = (dispatch) => ({
  Modal: () => {dispatch(Modal())}
});

export default connect(mapStateToProps, mapDispachToProps)(Footer);