// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import {t} from 'utils/i18n';

import AdminPanel from 'components/widgets/admin_console/admin_panel';
import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';

import * as Utils from 'utils/utils';

import TeamIcon from 'components/widgets/team_icon/team_icon';

export function TeamProfile({team}) {
    const teamIconUrl = Utils.imageURLForTeam(team);

    return (
        <AdminPanel
            id='team_profile'
            titleId={t('admin.team_settings.team_detail.profileTitle')}
            titleDefault='Team Profile'
            subtitleId={t('admin.team_settings.team_detail.profileDescription')}
            subtitleDefault='Summary of the team, including team name and description.'
        >

            <div className='group-teams-and-channels'>

                <div className='group-teams-and-channels--body'>
                    <div className='row'>
                        <div className='col-sm-2 large-team-image-col'>
                            <TeamIcon
                                name={team.display_name}
                                size='lg'
                                url={teamIconUrl}
                            />
                        </div>
                        <div className='col-sm-10'>
                            <div className='row row-bottom-padding'>
                                <FormattedMarkdownMessage
                                    id='admin.team_settings.team_detail.teamName'
                                    defaultMessage='**Team Name**:'
                                />
                                <br/>
                                {team.display_name}
                            </div>
                            <div className='row'>
                                <FormattedMarkdownMessage
                                    id='admin.team_settings.team_detail.teamDescription'
                                    defaultMessage='**Team Description**:'
                                />
                                <br/>
                                {team.description || <span className='greyed-out'>{Utils.localizeMessage('admin.team_settings.team_detail.profileNoDescription', 'No team description added.')}</span>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </AdminPanel>
    );
}

TeamProfile.propTypes = {
    team: PropTypes.object.isRequired,
};
