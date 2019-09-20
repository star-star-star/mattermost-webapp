// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {isDesktopApp} from 'utils/user_agent.jsx';

import PopoverBar from './popover_bar.jsx';

function mapStateToProps() {
    return {
        isDesktopApp: isDesktopApp(),
    };
}

export default connect(mapStateToProps)(PopoverBar);
