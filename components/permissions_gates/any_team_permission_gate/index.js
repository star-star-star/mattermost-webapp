// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {haveITeamPermission} from 'mattermost-redux/selectors/entities/roles';
import {getMyTeams} from 'mattermost-redux/selectors/entities/teams';

import AnyTeamPermissionGate from './any_team_permission_gate.jsx';

function mapStateToProps(state, ownProps) {
    const teams = getMyTeams(state);
    for (const team of teams) {
        for (const permission of ownProps.permissions) {
            if (haveITeamPermission(state, {team: team.id, permission})) {
                return {hasPermission: true};
            }
        }
    }

    return {hasPermission: false};
}

export default connect(mapStateToProps)(AnyTeamPermissionGate);
