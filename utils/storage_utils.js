// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function getPrefix(state) {
    if (state && state.entities && state.entities.users && state.entities.users.profiles) {
        const user = state.entities.users.profiles[state.entities.users.currentUserId];
        if (user) {
            return user.id + '_';
        }
    }

    return 'unknown_';
}

