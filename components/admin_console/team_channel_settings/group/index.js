// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {t} from 'utils/i18n';

import List from './group_list.jsx';

function mapStateToProps(state, {groups, totalGroups, isModeSync, onGroupRemoved}) {
    return {
        data: groups,
        removeGroup: onGroupRemoved,
        emptyListTextId: isModeSync ? t('admin.team_channel_settings.group_list.no-synced-groups') : t('admin.team_channel_settings.group_list.no-groups'),
        emptyListTextDefaultMessage: isModeSync ? 'At least one group must be specified' : 'No groups specified yet',
        total: totalGroups,
    };
}

function mapDispatchToProps() {
    return {
        actions: {
            getData: () => Promise.resolve(),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

