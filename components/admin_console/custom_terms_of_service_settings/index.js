// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getTermsOfService, createTermsOfService} from 'mattermost-redux/actions/users';

import CustomTermsOfServiceSettings from './custom_terms_of_service_settings.jsx';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getTermsOfService,
            createTermsOfService,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(CustomTermsOfServiceSettings);
