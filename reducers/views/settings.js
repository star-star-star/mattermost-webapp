// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants.jsx';

export default function settings(state = {}, action) {
    switch (action.type) {
    case ActionTypes.UPDATE_ACTIVE_SECTION:
        return {
            activeSection: action.data,
            previousActiveSection: state.activeSection,
        };
    default:
        return state;
    }
}