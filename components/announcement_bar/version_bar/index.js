// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import VersionBar from './version_bar.jsx';

function mapStateToProps(state) {
    return {
        serverVersion: state.entities.general.serverVersion,
    };
}

export default connect(mapStateToProps)(VersionBar);
