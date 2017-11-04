import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/ActionCreators.js';
import Main from './Main';

function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
