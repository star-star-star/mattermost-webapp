// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';
import {cloneDeep} from 'lodash';

import AdminDefinition from 'components/admin_console/admin_definition.jsx';

export const getAdminDefinition = createSelector(
    () => AdminDefinition,
    (state) => state.plugins.adminConsoleReducers,
    (adminDefinition, reducers) => {
        let result = cloneDeep(AdminDefinition);
        for (const reducer of Object.values(reducers)) {
            result = reducer(result);
        }
        return result;
    }
);
