// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import FilePreview from './file_preview';

function mapStateToProps(state) {
    const config = getConfig(state);

    return {
        enableSVGs: config.EnableSVGs === 'true',
    };
}

export default connect(mapStateToProps)(FilePreview);
