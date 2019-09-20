// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import FileThumbnail from './file_thumbnail';

function mapStateToProps(state) {
    return {
        enableSVGs: getConfig(state).EnableSVGs === 'true',
    };
}

export default connect(mapStateToProps)(FileThumbnail);
