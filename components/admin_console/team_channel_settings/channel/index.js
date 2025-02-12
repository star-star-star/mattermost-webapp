// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {connect} from 'react-redux';

import {ChannelsSettings} from './channel_settings';

function mapStateToProps(state) {
    const config = getConfig(state);
    const siteName = config.SiteName;

    return {
        siteName,
    };
}

export default connect(mapStateToProps)(ChannelsSettings);
