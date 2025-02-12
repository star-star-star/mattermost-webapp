// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {leaveChannel} from 'actions/views/channel';

import LeaveChannel from './leave_channel';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({leaveChannel}, dispatch),
});

export default connect(null, mapDispatchToProps)(LeaveChannel);
