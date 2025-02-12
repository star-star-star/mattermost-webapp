// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants';

export function openModal(modalData) {
    return (dispatch) => {
        const action = {
            type: ActionTypes.MODAL_OPEN,
            modalId: modalData.modalId,
            dialogProps: modalData.dialogProps,
            dialogType: modalData.dialogType,
        };

        dispatch(action);
    };
}

export function closeModal(modalId) {
    return (dispatch) => {
        const action = {
            type: ActionTypes.MODAL_CLOSE,
            modalId,
        };

        dispatch(action);
    };
}
