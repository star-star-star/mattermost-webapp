// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTeams as loadTeams, searchTeams} from 'mattermost-redux/actions/teams';
import {getTeams} from 'mattermost-redux/selectors/entities/teams';

import {setModalSearchTerm} from 'actions/views/search';

import TeamSelectorModal from './team_selector_modal.jsx';

function mapStateToProps(state) {
    const searchTerm = state.views.search.modalSearch;

    const teams = Object.values(getTeams(state) || {}).filter((team) => {
        return team.display_name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
               team.description.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    return {
        searchTerm,
        teams,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loadTeams,
            setModalSearchTerm,
            searchTeams,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelectorModal);
