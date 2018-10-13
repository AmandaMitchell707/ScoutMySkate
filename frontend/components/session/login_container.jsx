import { connect } from 'react-redux';
import { login, receiveSessionErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => (
  { errors: errors.session }
);

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveSessionErrors([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
