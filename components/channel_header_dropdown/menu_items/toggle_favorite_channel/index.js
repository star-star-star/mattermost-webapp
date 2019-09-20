// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {favoriteChannel, unfavoriteChannel} from 'mattermost-redux/actions/channels';

import ToggleFavoriteChannel from './toggle_favorite_channel';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        favoriteChannel,
        unfavoriteChannel,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(ToggleFavoriteChannel);
