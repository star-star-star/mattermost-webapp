// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getGroupsAssociatedToTeam, unlinkGroupSyncable} from 'mattermost-redux/actions/groups';

import {closeModal, openModal} from 'actions/views/modals';

import TeamGroupsManageModal from './team_groups_manage_modal';

const mapStateToProps = (state, ownProps) => {
    return {
        team: state.entities.teams.teams[ownProps.teamID],
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        getGroupsAssociatedToTeam,
        closeModal,
        openModal,
        unlinkGroupSyncable,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamGroupsManageModal);
