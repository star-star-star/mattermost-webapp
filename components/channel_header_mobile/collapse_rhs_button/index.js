// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggleMenu as toggleRhsMenu} from 'actions/views/rhs';

import CollapseRhsButton from './collapse_rhs_button';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        toggleRhsMenu,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(CollapseRhsButton);
