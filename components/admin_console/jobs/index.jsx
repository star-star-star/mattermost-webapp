// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getJobsByType, createJob, cancelJob} from 'mattermost-redux/actions/jobs';
import * as Selectors from 'mattermost-redux/selectors/entities/jobs';

import Table from './table.jsx';

function mapStateToProps(state, ownProps) {
    return {
        jobs: Selectors.makeGetJobsByType(ownProps.jobType)(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getJobsByType,
            createJob,
            cancelJob,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
