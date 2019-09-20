// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import EditPostTimeLimitButton from './edit_post_time_limit_button';

function mapStateToProps(state) {
    const {PostEditTimeLimit} = getConfig(state);

    return {
        timeLimit: parseInt(PostEditTimeLimit, 10),
    };
}

export default connect(mapStateToProps)(EditPostTimeLimitButton);
