// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import PostListRow from './post_list_row.jsx';

function mapStateToProps(state, ownProps) {
    return {
        post: ownProps.post,
        channel: ownProps.channel,
    };
}

export default connect(mapStateToProps)(PostListRow);
