// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {revokeUserAccessToken} from 'mattermost-redux/actions/users';

import RevokeTokenButton from './revoke_token_button.jsx';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            revokeUserAccessToken,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(RevokeTokenButton);
