// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

export function isModalOpen(state, modalId) {
    return state.views.modals.modalState[modalId] && state.views.modals.modalState[modalId].open;
}
