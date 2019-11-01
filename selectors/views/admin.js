// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function getNavigationBlocked(state) {
    return state.views.admin.navigationBlock.blocked;
}

export function showNavigationPrompt(state) {
    return state.views.admin.navigationBlock.showNavigationPrompt;
}

export function getOnNavigationConfirmed(state) {
    return state.views.admin.navigationBlock.onNavigationConfirmed;
}