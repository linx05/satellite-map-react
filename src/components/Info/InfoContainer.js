import { connect } from 'react-redux';
import Info from './Info';
import {
  stopPollingSatelliteLocation,
  startPollingSatelliteLocation
} from '../../redux/actions/satellite';

const mapStateToProps = state => {
  return {
    location: state.satellite.position,
    info: state.satellite.info
  };
};

const mapDispatchToProps = {
  stopPollingSatelliteLocation,
  startPollingSatelliteLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
