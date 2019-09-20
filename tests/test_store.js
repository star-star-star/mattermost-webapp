// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export default function testConfigureStore(initialState = {}) {
    return configureStore([thunk])(initialState);
}
