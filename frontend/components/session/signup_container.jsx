import { connect } from 'react-redux';
import { createNewUser, receiveSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => (
  { errors: errors.session }
);

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(receiveSessionErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
