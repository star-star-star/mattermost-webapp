// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import {getSiteURL} from 'utils/url.jsx';

import GetPostLinkModal from './get_post_link_modal';

function mapStateToProps(state) {
    const currentTeam = getCurrentTeam(state) || {};
    const currentTeamUrl = `${getSiteURL()}/${currentTeam.name}`;
    return {
        currentTeamUrl,
    };
}

export default connect(mapStateToProps)(GetPostLinkModal);
