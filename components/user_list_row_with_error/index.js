// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getStatusForUserId} from 'mattermost-redux/selectors/entities/users';

import UserListRow from './user_list_row_with_error.jsx';

function mapStateToProps(state, ownProps) {
    const user = ownProps.user || {};
    return {
        status: getStatusForUserId(state, user.id),
    };
}

export default connect(mapStateToProps)(UserListRow);
