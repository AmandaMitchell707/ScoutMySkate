import { connect } from 'react-redux';
import {
  createNewUser,
  receiveSessionErrors,
  login
} from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => (
  { errors: errors.session }
);

const mapDispatchToProps = dispatch => {
  const demoUser = ({ email: 'skater1@gotham.com', password: 'starwars' });

  return {
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(receiveSessionErrors([])),
    loginDemoUser: () => dispatch(login(demoUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
