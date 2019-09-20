// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {installPluginFromUrl} from 'mattermost-redux/actions/admin';

import MarketplaceItem from './marketplace_item.jsx';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            installPluginFromUrl,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(MarketplaceItem);
