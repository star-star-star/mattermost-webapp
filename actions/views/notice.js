// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants';

export function dismissNotice(type) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.DISMISS_NOTICE,
            data: type,
        });

        return {data: true};
    };
}
