// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';
import {getInt} from 'mattermost-redux/selectors/entities/preferences';

import {Preferences, TutorialSteps} from 'utils/constants.jsx';
import * as Utils from 'utils/utils.jsx';

import SidebarHeader from './sidebar_header.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);
    const currentUser = getCurrentUser(state);

    const enableTutorial = config.EnableTutorial === 'true';

    const showTutorialTip = getInt(state, Preferences.TUTORIAL_STEP, currentUser.id) === TutorialSteps.MENU_POPOVER && !Utils.isMobile();

    return {
        enableTutorial,
        showTutorialTip,
    };
}

export default connect(mapStateToProps)(SidebarHeader);
