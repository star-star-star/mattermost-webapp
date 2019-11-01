// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export default function testConfigureStore(initialState = {}) {
    return configureStore([thunk])(initialState);
}
