import { connect } from 'react-redux';
import Info from './Info';
import {
  startPollingSatelliteLocation,
  stopPollingSatelliteLocation
} from '../../redux/actions/satellite';

const mapStateToProps = state => {
  return {
    location: state.satellite.position,
    info: state.satellite.info
  };
};

const mapDispatchToProps = {
  startPollingSatelliteLocation,
  stopPollingSatelliteLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
