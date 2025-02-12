// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/common';

import {isGuest} from 'utils/utils.jsx';

import ErrorPage from './error_page.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);
    const user = getCurrentUser(state);

    return {
        siteName: config.SiteName,
        asymmetricSigningPublicKey: config.AsymmetricSigningPublicKey,
        isGuest: Boolean(user && isGuest(user)),
    };
}

export default connect(mapStateToProps)(ErrorPage);
