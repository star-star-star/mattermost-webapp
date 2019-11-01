// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function connectionErrorCount(state) {
    return state.views.system.websocketConnectionErrorCount;
}
