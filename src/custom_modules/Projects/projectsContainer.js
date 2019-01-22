import { connect } from 'react-redux';

// Component
// import Projects from '../../views/Projects';
import Projects from './Projects.jsx';

// Actions
import { getList, addProject, updateProject } from './projectActions';

// Store props to map with current state
const mapStateToProps = state => ({
  projectsList: {...state.project}
});

// Actions prop to dispatch
const mapDispatchToProps = dispatch => ({
  getList: (details) => dispatch(getList({...details})),
  addProject: (details) => dispatch(addProject({...details})),
  updateProject: (details) => dispatch(updateProject({...details})),
});

// connect states and dispatchers with components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
