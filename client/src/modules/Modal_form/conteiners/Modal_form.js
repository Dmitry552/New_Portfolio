
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as canvasActions from '../actions';
import {Modal} from '../../Footer/actions';
import { Modal_form as ModalForm } from '../../../components';

var ValidationTitle = () => {
  
}

var mapStateToProps = ({Modal_form, Foot}) => ({
  Title: Modal_form.Title,
  Text: Modal_form.Text,
  Valid_form: Modal_form,
  foot: Foot.modal_form,
  ValidationTitle: ValidationTitle()
})

var mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(canvasActions, dispatch),
  Modal: () => dispatch(Modal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
