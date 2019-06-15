import { connect } from 'react-redux';
import Info from './Info';

const mapStateToProps = state => {
  return {
    location: state.satellite.position,
    info: state.satellite.info
  };
};

const mapDispatchToProps = {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
