// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import PersistGate from './persist_gate';

function mapStateToProps(state) {
    return {
        initialized: state.storage.initialized,
    };
}

export default connect(mapStateToProps)(PersistGate);
