// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentChannel} from 'mattermost-redux/selectors/entities/channels';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import CreateTeam from './create_team';

function mapStateToProps(state) {
    const config = getConfig(state);
    const currentChannel = getCurrentChannel(state);
    const currentTeam = getCurrentTeam(state);

    const customDescriptionText = config.CustomDescriptionText;
    const siteName = config.SiteName;

    return {
        currentChannel,
        currentTeam,
        customDescriptionText,
        siteName,
    };
}

export default connect(mapStateToProps)(CreateTeam);
