// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getUser} from 'mattermost-redux/actions/users';

import SystemUsersList from './system_users_list.jsx';
import {getNonBotUsers} from './selectors.jsx';

function mapStateToProps(state, ownProps) {
    const users = getNonBotUsers(state, ownProps.loading, ownProps.teamId, ownProps.term, ownProps.filter);
    return {
        users,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getUser,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemUsersList);
