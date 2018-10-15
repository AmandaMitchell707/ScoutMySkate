import { connect } from 'react-redux';
import Login from './login';
import {
  login,
  receiveSessionErrors
} from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => (
  { errors: errors.session }
);

const mapDispatchToProps = dispatch => {
  const demoUser = ({ email: 'skater1@gotham.com', password: 'starwars' });

  return {
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(receiveSessionErrors([])),
    loginDemoUser: () => dispatch(login(demoUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
